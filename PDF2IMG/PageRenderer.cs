using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Reflection;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using PuppeteerSharp;

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

        Browser chromeBrowser;
        Page chromePage;
        public bool IsReady { get; private set; } = false;
        private bool readyFired = false;
        private Action _onReady;
        AutoResetEvent pdfLoadEvent = new AutoResetEvent(false);
        AutoResetEvent paintEvent = new AutoResetEvent(false);
        ManualResetEvent renderEvent = new ManualResetEvent(false);
        ManualResetEvent pageRenderedEvent = new ManualResetEvent(false);
        ManualResetEvent textReady = new ManualResetEvent(false);
        string currentText = "";

        private bool _pdfLoadWaiting = false;
        public int PageCount = 0;
        public int CurrentPageNumber = 0;
        private List<InternalTextContent> textContents = new List<InternalTextContent>();
        Thread browserThread;

        //public PageRenderer(Action OnReady = null)
        //{
        //    _onReady = OnReady;
        //    FileResourceHandlerFactory fileResourceHandlerFactory = new FileResourceHandlerFactory("pdfviewer", "host", Directory.GetCurrentDirectory());
        //    browserThread = new Thread(() =>
        //    {
        //        cefBrowser = new ChromiumWebBrowser("pdfviewer://host/web/pdfcapture.html");
        //        //cefBrowser = new ChromiumWebBrowser("http://www.google.com/");
        //        //cefBrowser.RenderHandler = new CefRenderHandler(cefBrowser);
        //        cefBrowser.LoadingStateChanged += CefBrowser_LoadingStateChanged;
        //        cefBrowser.Paint += CefBrowser_Paint;
        //        cefBrowser.Size = new Size(1024, 768);
        //        cefBrowser.RegisterJsObject("viewerCallback", new viewerCallback(cefBrowser, this));
        //    });
        //    browserThread.Start();
        //}

        FileResourceHandlerFactory fileResourceHandlerFactory;

        private PageRenderer(Browser browser, Page page, Action onReady)
        {
            _onReady = onReady;
            chromeBrowser = browser;
            chromePage = page;
            fileResourceHandlerFactory = new FileResourceHandlerFactory("pdfviewer", "host", Directory.GetCurrentDirectory());
            page.Request += Page_Request;
            page.RequestFinished += Page_RequestFinished;
            page.Load += Page_Load;


            chromePage.ExposeFunctionAsync<int, int>("pdfLoaded", (numPages) =>
            {
                Console.WriteLine("pdfLoaded");
                renderEvent.Reset();
                PageCount = numPages;
                if (OnPDFLoaded != null)
                {
                    new Task(() =>
                    {
                        OnPDFLoaded(this, new EventArgs());
                    }).Start();
                }
                pdfLoadEvent.Set();
                return 0;
            });

            chromePage.ExposeFunctionAsync<int, int>("pdfRendered", (pageNumber) =>
            {
                Console.WriteLine("pdfRendered");
                CurrentPageNumber = pageNumber;
                paintEvent.Reset();
                renderEvent.Set();
                return 0;
            });

            chromePage.ExposeFunctionAsync<string, int, int>("pageOpened", (string viewportJSON, int pageNumber) =>
            {
                Console.WriteLine("PageOpened " + pageNumber);
                PageViewport viewport = Newtonsoft.Json.JsonConvert.DeserializeObject<PageViewport>(viewportJSON);
                CurrentPageNumber = pageNumber;
                chromePage.SetViewportAsync(new ViewPortOptions()
                {
                    Width = (int)Math.Round(viewport.width),
                    Height = (int)Math.Round(viewport.height)
                });
                _pdfLoadWaiting = false;
                renderEvent.Set();

                //new Task(() =>
                //{
                //    renderEvent.WaitOne(1000);
                //    while (paintEvent.WaitOne(500)) ; // this is a bit flaky but seems to work - basically we want to keep waiting until we no longer get any paint events
                //        pageRenderedEvent.Set();
                //    if (OnPageRendered != null)
                //    {
                //        OnPageRendered(this, new PageRenderedEventArgs()
                //        {
                //            PageNumber = pageNumber,
                //            PageImage = GetPage()
                //        });
                //    }
                //}).Start();
                return 0;
            });

            page.GoToAsync("http://host/web/pdfcapture.html");
        }

        private void Page_Load(object sender, EventArgs e)
        {
            Console.WriteLine("Page load");
            if(!readyFired)
            {
                readyFired = true;
                if(_onReady != null)
                {
                    _onReady();
                }
            }
        }

        private void Page_RequestFinished(object sender, RequestEventArgs e)
        {
            Console.WriteLine("Request finished - " + e.Request.Url);
        }

        private void Page_Request(object sender, RequestEventArgs e)
        {
            string extension;
            string content = fileResourceHandlerFactory.get_content(new Uri(e.Request.Url), out extension);
            ResponseData response = new ResponseData();
            response.Status = System.Net.HttpStatusCode.OK;
            response.Body = content;
            e.Request.RespondAsync(response);
        }

        public async static Task<PageRenderer> Create(Action onReady)
        {
            await new BrowserFetcher().DownloadAsync(BrowserFetcher.DefaultRevision);

            var browser = await Puppeteer.LaunchAsync(new LaunchOptions
            {
                Headless = false
            });

            var page = await browser.NewPageAsync();
            await page.SetRequestInterceptionAsync(true);

            PageRenderer pR = new PageRenderer(browser, page, onReady);
            return pR;
        }

        ManualResetEvent textContentsReady = new ManualResetEvent(false);
        List<TextContentItem> currentTextContents = null;

        public List<TextContentItem> GetTextContent(int pageNumber)
        {
            Task<List<TextContentItem>> task = GetTextContentAsync(pageNumber);
            task.Wait();
            return task.Result;
        }

        public async Task<List<TextContentItem>> GetTextContentAsync(int pageNumber)
        {
            if (pageNumber > -1 && pageNumber < PageCount)
            {
                string textContent = await chromePage.EvaluateFunctionAsync<string>("getTextContent", new[] { (pageNumber + 1).ToString() });
                InternalTextContent tContent = Newtonsoft.Json.JsonConvert.DeserializeObject<InternalTextContent>(textContent);
                List<TextContentItem> textContents = new List<TextContentItem>();
                foreach (InternalTextContentItem item in tContent.items)
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

                return textContents;
            }

            return null;
        }


        public string GetText(int pageNumber)
        {
            Task<string> task = GetTextAsync(pageNumber);
            task.Wait();
            return task.Result;
        }

        public async Task<string> GetTextAsync(int pageNumber)
        {
            if (pageNumber > -1 && pageNumber < PageCount)
            {
                string textContent = await chromePage.EvaluateFunctionAsync<string>("getText", new[] { (pageNumber + 1).ToString() });
                return textContent;
            }
            return null;
        }

        //public List<TextContentItem> GetTextContentSync(int pageNumber)
        //{
        //    if (pageNumber > 0 && pageNumber <= PageCount)
        //    {
        //        textContentsReady.Reset();
        //        cefBrowser.ExecuteScriptAsync("getTextContent", new[] { pageNumber.ToString() });
        //        textContentsReady.WaitOne();
        //        return currentTextContents;
        //    }
        //    else
        //    {
        //        return null;
        //    }
        //}

        Dictionary<string, Action<List<TextContentItem>>> textContentCallbacks = new Dictionary<string, Action<List<TextContentItem>>>();

        //public void GetTextContentAsync(int pageNumber, Action<List<TextContentItem>> successCallback)
        //{
        //    if (pageNumber > 0 && pageNumber <= PageCount)
        //    {
        //        string callbackID = Guid.NewGuid().ToString();
        //        textContentCallbacks.Add(callbackID, successCallback);
        //        cefBrowser.ExecuteScriptAsync("getTextContentWithCallback", new[] { pageNumber.ToString(), callbackID });
        //    }
        //}

        //public string GetTextSync(int pageNumber)
        //{
        //    if (pageNumber > 0 && pageNumber <= PageCount)
        //    {
        //        textReady.Reset();
        //        cefBrowser.ExecuteScriptAsync("getText", new[] { pageNumber.ToString() });
        //        textReady.WaitOne();
        //        return currentText;
        //    }
        //    else
        //    {
        //        return null;
        //    }
        //}

        //public void GetTextContent(int pageNumber)
        //{
        //    if(pageNumber > 0 && pageNumber <= PageCount)
        //    {
        //        cefBrowser.ExecuteScriptAsync("getTextContent", new[] { pageNumber.ToString() });
        //    }
        //}

        internal void gotText(int pageNumber, string text)
        {
            currentText = text;
            textReady.Set();
        }

        internal void gotTextContentsCallback(int pageNumber, InternalTextContent tContent, string callbackID)
        {
            if(textContentCallbacks.ContainsKey(callbackID))
            {
                List<TextContentItem> textContents = new List<TextContentItem>();
                foreach (InternalTextContentItem item in tContent.items)
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
                textContentCallbacks[callbackID](textContents);
                textContentCallbacks.Remove(callbackID);
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

            if (OnGotTextContent != null)
            {
                new Task(() =>
                {
                    OnGotTextContent(this, new TextContentEventArgs()
                    {
                        PageNumber = pageNumber,
                        TextContent = textContents,
                        Viewport = tContent.viewport
                    });
                }).Start();
            }

            currentTextContents = textContents;
            textContentsReady.Set();
        }

        public Bitmap RenderPage(int pageNumber, double pageScale)
        {
            renderEvent.Reset();
            GotoPage(pageNumber + 1, pageScale);
            Task<Bitmap> tBmp = GetPage();
            tBmp.Wait();
            return tBmp.Result;
        }

        public async Task<Bitmap> RenderPageAsync(int pageNumber, double pageScale)
        {
            renderEvent.Reset();
            GotoPage(pageNumber + 1, pageScale);
            return await GetPage();
        }

        public void LoadPDF(string filename)
        {
            if (!_pdfLoadWaiting)
            {
                _pdfLoadWaiting = true;
                var buffer = File.ReadAllBytes(filename);
                var asBase64 = Convert.ToBase64String(buffer);
                chromePage.EvaluateFunctionAsync("openPdfAsBase64", new[] { asBase64 });
            }
            else
            {
                throw new Exception("A PDF file is already waiting to be loaded.");
            }
        }

        //public void LoadPDFSync(string filename)
        //{
        //    if (!_pdfLoadWaiting)
        //    {
        //        _pdfLoadWaiting = true;
        //        var buffer = File.ReadAllBytes(filename);
        //        var asBase64 = Convert.ToBase64String(buffer);
        //        cefBrowser.ExecuteScriptAsync("openPdfAsBase64", new[] { asBase64 });
        //        pdfLoadEvent.WaitOne();
        //    }
        //    else
        //    {
        //        throw new Exception("A PDF file is already waiting to be loaded.");
        //    }
        //}

        public async void GotoPage(int pageNumber, double pageScale = 1.0)
        {
            await chromePage.EvaluateFunctionAsync("setCurrentPage", new[] { pageNumber.ToString(), pageScale.ToString() });
        }



        //internal void OnPageOpened(PageViewport viewport, int pageNumber)
        //{
        //    CurrentPageNumber = pageNumber;
        //    cefBrowser.Size = new Size((int)Math.Round(viewport.width), (int)Math.Round(viewport.height));
        //    _pdfLoadWaiting = false;
        //    renderEvent.Reset();
        //    new Task(() =>
        //    {
        //        renderEvent.WaitOne(1000);
        //        while (paintEvent.WaitOne(500)) ; // this is a bit flaky but seems to work - basically we want to keep waiting until we no longer get any paint events
        //        pageRenderedEvent.Set();
        //        if (OnPageRendered != null)
        //        {
        //            OnPageRendered(this, new PageRenderedEventArgs()
        //            {
        //                PageNumber = pageNumber,
        //                PageImage = GetPage()
        //            });
        //        }
        //    }).Start();
        //}

        public async Task<Bitmap> GetPage()
        {
            if(chromePage != null)
            {
                MemoryStream mStream = new MemoryStream(await chromePage.ScreenshotDataAsync());
                mStream.Position = 0;
                return new Bitmap(mStream);
            }
            return null;
            //if(cefBrowser.RenderHandler != null)
            //{
            //    var renderHandler = cefBrowser.RenderHandler as DefaultRenderHandler;

            //    if(renderHandler != null)
            //    {
            //        if(renderHandler.BitmapBuffer.NumberOfBytes == 0)
            //        {
            //            return null;
            //        }

            //        lock(renderHandler.BitmapLock)
            //        {
            //            // copy buffer to a new byte array
            //            IntPtr unmanagedPointer = Marshal.AllocHGlobal(renderHandler.BitmapBuffer.NumberOfBytes);
            //            Marshal.Copy(renderHandler.BitmapBuffer.Buffer, 0, unmanagedPointer, renderHandler.BitmapBuffer.NumberOfBytes);

            //            byte[] newBytes = new byte[renderHandler.BitmapBuffer.NumberOfBytes];
            //            Marshal.Copy(unmanagedPointer, newBytes, 0, renderHandler.BitmapBuffer.NumberOfBytes);

            //            Marshal.FreeHGlobal(unmanagedPointer);

            //            // now get a pointer to our new byte array and generate a bitmap object
            //            Bitmap bmp;
            //            unsafe
            //            {
            //                fixed (byte* p = newBytes)
            //                {
            //                    IntPtr ptr = (IntPtr)p;
            //                    bmp = new Bitmap(renderHandler.BitmapBuffer.Width, renderHandler.BitmapBuffer.Height, renderHandler.BitmapBuffer.Width * 4, System.Drawing.Imaging.PixelFormat.Format32bppPArgb, ptr);
            //                }
            //            }
            //            //Bitmap cloned = bmp.Clone(new Rectangle(0, 0, bmp.Width, bmp.Height), System.Drawing.Imaging.PixelFormat.Format32bppPArgb);
            //            return bmp;
            //        }
            //    }
            //}

            return null;
        }

        //private void CefBrowser_LoadingStateChanged(object sender, LoadingStateChangedEventArgs e)
        //{
        //    //Console.WriteLine("OffScreen loading state: " + e.IsLoading);
        //    if(!e.IsLoading && !IsReady)
        //    {
        //        IsReady = true;
        //        if(_onReady != null)
        //        {
        //            // fire our onReady back in a new thread, so it doesn't clash with what we're running here
        //            new Task(_onReady).Start();
        //        }
        //    }
        //}

        public void Dispose()
        {
            if (chromePage != null)
            {
                chromePage.CloseAsync();
            }

            if (chromeBrowser != null)
            {
                chromeBrowser.CloseAsync();
            }
        }
    }
}
