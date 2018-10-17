using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Reflection;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

using CefSharp;
using CefSharp.OffScreen;

namespace BarnardTech.PDF2IMG
{
    public delegate void PDFLoadedDelegate(object sender, EventArgs eventArgs);
    public delegate void TextContentDelegate(object sender, TextContentEventArgs eventArgs);
    public delegate void PageRenderedDelegate(object sender, PageRenderedEventArgs eventArgs);

    public class PageRenderer : IDisposable
    {
        public event TextContentDelegate OnGotTextContent;
        public event PDFLoadedDelegate OnPDFLoaded;
        public event PageRenderedDelegate OnPageRendered;

        static bool AlreadyInitialized = false;
        ChromiumWebBrowser cefBrowser;
        public bool IsReady { get; private set; } = false;
        private Action _onReady;
        AutoResetEvent paintEvent = new AutoResetEvent(false);
        ManualResetEvent renderEvent = new ManualResetEvent(false);
        ManualResetEvent pageRenderedEvent = new ManualResetEvent(false);

        private bool _pdfLoadWaiting = false;
        //private Action _pdfLoadedCallback = null;
        //private Action<int> _pageRenderedCallback = null;
        public int PageCount = 0;
        public int CurrentPageNumber = 0;
        private List<InternalTextContent> textContents = new List<InternalTextContent>();
        Thread browserThread;

        public PageRenderer(Action OnReady = null)
        {
            
            _onReady = OnReady;
            //AppDomain.CurrentDomain.AssemblyResolve += Resolver;

            FileResourceHandlerFactory fileResourceHandlerFactory = new FileResourceHandlerFactory("pdfviewer", "host", Directory.GetCurrentDirectory());

            if (!AlreadyInitialized)
            {
                AlreadyInitialized = true;
                var settings = new CefSettings();
                settings.RegisterScheme(new CefCustomScheme
                {
                    SchemeName = "pdfviewer",
                    SchemeHandlerFactory = fileResourceHandlerFactory,
                    IsSecure = true //treated with the same security rules as those applied to "https" URLs
                });
                CefSharpSettings.LegacyJavascriptBindingEnabled = true;
                Cef.Initialize(settings);
            }

            browserThread = new Thread(() =>
            {
                cefBrowser = new ChromiumWebBrowser("pdfviewer://host/web/pdfcapture.html");
                //cefBrowser = new ChromiumWebBrowser("http://www.google.com/");
                //cefBrowser.RenderHandler = new CefRenderHandler(cefBrowser);
                cefBrowser.LoadingStateChanged += CefBrowser_LoadingStateChanged;
                cefBrowser.Paint += CefBrowser_Paint;
                cefBrowser.Size = new Size(1024, 768);
                cefBrowser.RegisterJsObject("viewerCallback", new viewerCallback(cefBrowser, this));
            });

            browserThread.Start();
        }

        ManualResetEvent textContentsReady = new ManualResetEvent(false);
        List<TextContentItem> currentTextContents = null;

        public List<TextContentItem> GetTextContentSync(int pageNumber)
        {
            if (pageNumber > 0 && pageNumber <= PageCount)
            {
                textContentsReady.Reset();
                cefBrowser.ExecuteScriptAsync("getTextContent", new[] { pageNumber.ToString() });
                textContentsReady.WaitOne();
                return currentTextContents;
            }
            else
            {
                return null;
            }
        }

        public void GetTextContent(int pageNumber)
        {
            if(pageNumber > 0 && pageNumber <= PageCount)
            {
                cefBrowser.ExecuteScriptAsync("getTextContent", new[] { pageNumber.ToString() });
            }
        }

        internal void gotTextContents(int pageNumber, InternalTextContent tContent)
        {
            List<TextContentItem> textContents = new List<TextContentItem>();
            foreach(InternalTextContentItem item in tContent.items)
            {
                textContents.Add(new TextContentItem()
                {
                    Text = item.str,
                    Direction = item.dir == "rtl" ? TextDirection.RightToLeft : TextDirection.LeftToRight,
                    Width = item.width,
                    Height = item.height,
                    X = item.transform[4],
                    Y = item.transform[5],
                    FontName = item.fontName,
                    Chars = item.chars
                });
            }

            new Task(() =>
            {
                OnGotTextContent(this, new TextContentEventArgs()
                {
                    PageNumber = pageNumber,
                    TextContent = textContents,
                    Viewport = tContent.viewport
                });
            }).Start();

            currentTextContents = textContents;
            textContentsReady.Set();
        }

        public Bitmap RenderPageSync(int pageNumber)
        {
            //new Task(() =>
            //{
                GotoPage(pageNumber);
            //}).Start();
            pageRenderedEvent.Reset();
            pageRenderedEvent.WaitOne();
            return GetPage();
        }

        private void CefBrowser_Paint(object sender, OnPaintEventArgs e)
        {
            Console.WriteLine("PAINT");
            paintEvent.Set();
        }

        public void LoadPDF(string filename)//, Action pdfLoaded, Action<int> pageRendered)
        {
            if (!_pdfLoadWaiting)
            {
                _pdfLoadWaiting = true;
                //_pdfLoadedCallback = pdfLoaded;
                //_pageRenderedCallback = pageRendered;
                var buffer = File.ReadAllBytes(filename);
                var asBase64 = Convert.ToBase64String(buffer);
                cefBrowser.ExecuteScriptAsync("openPdfAsBase64", new[] { asBase64 });
            }
            else
            {
                throw new Exception("A PDF file is already waiting to be loaded.");
            }
        }

        public void GotoPage(int pageNumber)
        {
            cefBrowser.ExecuteScriptAsync("setCurrentPage", new[] { pageNumber.ToString() });
        }

        internal void OnPdfRendered(int pageNumber)
        {
            CurrentPageNumber = pageNumber;
            paintEvent.Reset();
            renderEvent.Set();
        }

        internal void OnPdfLoaded(int numPages)
        {
            renderEvent.Reset();
            PageCount = numPages;
            //if(_pdfLoadedCallback != null)
            //{
            //    _pdfLoadedCallback();
            //}
            if (OnPDFLoaded != null)
            {
                new Task(() =>
                {
                    OnPDFLoaded(this, new EventArgs());
                }).Start();
            }
        }

        internal void OnPageOpened(PageViewport viewport, int pageNumber)
        {
            CurrentPageNumber = pageNumber;
            cefBrowser.Size = new Size((int)Math.Round(viewport.width), (int)Math.Round(viewport.height));
            _pdfLoadWaiting = false;
            renderEvent.Reset();
            /*if (_pageRenderedCallback != null)
            {
                new Task(() =>
                {
                    // wait for render first
                    renderEvent.WaitOne(1000); // sometimes a render doesn't happen - we need to fine-tune this.
                    // then wait for the paint that happens after the render
                    paintEvent.WaitOne();
                    _pageRenderedCallback(CurrentPageNumber);
                }).Start();
            }*/
            new Task(() =>
            {
                renderEvent.WaitOne(1000);
                while (paintEvent.WaitOne(500)) ; // this is a bit flaky but seems to work - basically we want to keep waiting until we no longer get any paint events
                pageRenderedEvent.Set();
                OnPageRendered(this, new PageRenderedEventArgs()
                {
                    PageNumber = pageNumber,
                    PageImage = GetPage()
                });
            }).Start();
        }

        public Bitmap GetPage()
        {
            //var completionSource = new TaskCompletionSource<Bitmap>();
            //System.Drawing.Bitmap b = await cefBrowser.ScreenshotAsync();
            if(cefBrowser.RenderHandler != null)
            {
                var renderHandler = cefBrowser.RenderHandler as DefaultRenderHandler;

                if(renderHandler != null)
                {
                    if(renderHandler.BitmapBuffer.NumberOfBytes == 0)
                    {
                        return null;
                    }

                    lock(renderHandler.BitmapLock)
                    {
                        // copy buffer to a new byte array
                        IntPtr unmanagedPointer = Marshal.AllocHGlobal(renderHandler.BitmapBuffer.NumberOfBytes);
                        Marshal.Copy(renderHandler.BitmapBuffer.Buffer, 0, unmanagedPointer, renderHandler.BitmapBuffer.NumberOfBytes);

                        byte[] newBytes = new byte[renderHandler.BitmapBuffer.NumberOfBytes];
                        Marshal.Copy(unmanagedPointer, newBytes, 0, renderHandler.BitmapBuffer.NumberOfBytes);

                        Marshal.FreeHGlobal(unmanagedPointer);

                        // now get a pointer to our new byte array and generate a bitmap object
                        Bitmap bmp;
                        unsafe
                        {
                            fixed (byte* p = newBytes)
                            {
                                IntPtr ptr = (IntPtr)p;
                                bmp = new Bitmap(renderHandler.BitmapBuffer.Width, renderHandler.BitmapBuffer.Height, renderHandler.BitmapBuffer.Width * 4, System.Drawing.Imaging.PixelFormat.Format32bppPArgb, ptr);
                            }
                        }
                        //Bitmap cloned = bmp.Clone(new Rectangle(0, 0, bmp.Width, bmp.Height), System.Drawing.Imaging.PixelFormat.Format32bppPArgb);
                        return bmp;
                    }
                }
            }

            return null;
        }

        private void CefBrowser_LoadingStateChanged(object sender, LoadingStateChangedEventArgs e)
        {
            //Console.WriteLine("OffScreen loading state: " + e.IsLoading);
            if(!e.IsLoading && !IsReady)
            {
                IsReady = true;
                if(_onReady != null)
                {
                    // fire our onReady back in a new thread, so it doesn't clash with what we're running here
                    new Task(_onReady).Start();
                }
            }
        }

        // Will attempt to load missing assembly from either x86 or x64 subdir
        private static Assembly Resolver(object sender, ResolveEventArgs args)
        {
            if (args.Name.StartsWith("CefSharp"))
            {
                string assemblyName = args.Name.Split(new[] { ',' }, 2)[0] + ".dll";

                //string archSpecificPath = Path.Combine(AppDomain.CurrentDomain.SetupInformation.ApplicationBase,
                string archSpecificPath = Path.Combine(Assembly.GetEntryAssembly().Location,
                                                       Environment.Is64BitProcess ? "x64" : "x86",
                                                       assemblyName);

                return File.Exists(archSpecificPath)
                           ? Assembly.LoadFile(archSpecificPath)
                           : null;
            }

            return null;
        }

        public void Dispose()
        {
            if(cefBrowser != null)
            {
                cefBrowser.Dispose();
            }
        }
    }
}
