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

    public class PageRenderer : IDisposable
    {
        public event PDFLoadedDelegate OnPDFLoaded;

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

        private bool _pdfLoadWaiting = false;
        public int PageCount = 0;
        public int CurrentPageNumber = 0;
        private List<InternalTextContent> textContents = new List<InternalTextContent>();

        FileResourceHandlerFactory fileResourceHandlerFactory;

        public PageRenderer()
        {
            AutoResetEvent readyEvent = new AutoResetEvent(false);

            new Task(async () =>
            {
                await new BrowserFetcher().DownloadAsync(BrowserFetcher.DefaultRevision);

                var browser = await Puppeteer.LaunchAsync(new LaunchOptions
                {
                    Headless = true
                });

                var page = await browser.NewPageAsync();
                await page.SetRequestInterceptionAsync(true);

                _init(browser, page, () =>
                {
                    readyEvent.Set();
                });
            }).Start();

            readyEvent.WaitOne();
        }

        private PageRenderer(Browser browser, Page page, Action onReady)
        {
            _init(browser, page, onReady);
        }

        private void _init(Browser browser, Page page, Action onReady)
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

            chromePage.ExposeFunctionAsync<string, int, double, int>("pageOpened", (string viewportJSON, int pageNumber, double pageScale) =>
            {
                Console.WriteLine("PageOpened " + pageNumber);
                PageViewport viewport = Newtonsoft.Json.JsonConvert.DeserializeObject<PageViewport>(viewportJSON);
                CurrentPageNumber = pageNumber;
                chromePage.SetViewportAsync(new ViewPortOptions()
                {
                    Width = (int)Math.Floor(viewport.width + Math.Round(pageScale)),
                    Height = (int)Math.Floor(viewport.height)
                });
                _pdfLoadWaiting = false;
                renderEvent.Set();
                return 0;
            });

            page.GoToAsync("http://host/web/pdfcapture.html");
        }

        private void Page_Load(object sender, EventArgs e)
        {
            Console.WriteLine("Page load");
            if (!readyFired)
            {
                readyFired = true;
                if (_onReady != null)
                {
                    _onReady();
                }
            }
        }

        private void Page_RequestFinished(object sender, RequestEventArgs e)
        {
            
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

        public async static Task<PageRenderer> CreateAsync(Action onReady)
        {
            await new BrowserFetcher().DownloadAsync(BrowserFetcher.DefaultRevision);

            var browser = await Puppeteer.LaunchAsync(new LaunchOptions
            {
                Headless = true
            });

            var page = await browser.NewPageAsync();
            await page.SetRequestInterceptionAsync(true);

            PageRenderer pR = new PageRenderer(browser, page, onReady);
            return pR;
        }

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

        Dictionary<string, Action<List<TextContentItem>>> textContentCallbacks = new Dictionary<string, Action<List<TextContentItem>>>();

        public Bitmap RenderPage(int pageNumber, double pageScale)
        {
            renderEvent.Reset();
            GotoPage(pageNumber + 1, pageScale);
            Task<Bitmap> tBmp = GetPage(pageScale);
            tBmp.Wait();
            return tBmp.Result;
        }

        public async Task<Bitmap> RenderPageAsync(int pageNumber, double pageScale)
        {
            renderEvent.Reset();
            GotoPage(pageNumber + 1, pageScale);
            return await GetPage(pageScale);
        }

        public void LoadPDF(string filename)
        {
            pdfLoadEvent.Reset();
            LoadPDFAsync(filename);
            pdfLoadEvent.WaitOne();
        }

        public async void LoadPDFAsync(string filename)
        {
            if (!_pdfLoadWaiting)
            {
                _pdfLoadWaiting = true;
                var buffer = File.ReadAllBytes(filename);
                var asBase64 = Convert.ToBase64String(buffer);
                await chromePage.EvaluateFunctionAsync("openPdfAsBase64", new[] { asBase64 });
            }
            else
            {
                throw new Exception("A PDF file is already waiting to be loaded.");
            }
        }

        public async void GotoPage(int pageNumber, double pageScale = 1.0)
        {
            await chromePage.EvaluateFunctionAsync("setCurrentPage", new[] { pageNumber.ToString(), pageScale.ToString() });
        }

        public async Task<Bitmap> GetPage(double pageScale)
        {
            if (chromePage != null)
            {
                MemoryStream mStream = new MemoryStream(await chromePage.ScreenshotDataAsync());
                mStream.Position = 0;
                // our screenshot has a few extra pixels on the right to allow 'breathing space' for the PDF
                // to display full-screen, so we need to remove that.
                Bitmap screenShot = new Bitmap(mStream);
                Bitmap outBmp = new Bitmap((int)(screenShot.Width - Math.Round(pageScale) - 1), screenShot.Height);
                Graphics g = Graphics.FromImage(outBmp);
                g.DrawImage(screenShot, 0, 0);
                g.Dispose();
                screenShot.Dispose();
                mStream.Dispose();

                return outBmp;
            }
            return null;
        }

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