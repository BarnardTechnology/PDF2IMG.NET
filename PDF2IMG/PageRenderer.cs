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

    /// <summary>
    /// Renders pages from PDF files and provides additional information about the contents of the pages.
    /// </summary>
    public class PageRenderer : IDisposable
    {
        public event PDFLoadedDelegate OnPDFLoaded;

        Browser chromeBrowser;
        Page chromePage;

        private bool readyFired = false;
        private Action _onReady;
        AutoResetEvent pdfLoadEvent = new AutoResetEvent(false);

        private bool _pdfLoadWaiting = false;
        public int PageCount = 0;
        public int CurrentPageNumber = 0;
        private List<InternalTextContent> textContents = new List<InternalTextContent>();

        FileResourceHandlerFactory fileResourceHandlerFactory;

        /// <summary>
        /// Create a new PageRenderer. This function uses PuppeteerSharp to control an in-background copy of Chrome.
        /// If Chrome isn't available in the current application's path, it'll automatically download one. This means
        /// that when creating a PageRenderer for the first time, there may be a significant wait while Chrome is
        /// downloaded.
        /// </summary>
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
            page.GoToAsync("http://host/web/pdfcapture2.html");
        }

        private void Page_Load(object sender, EventArgs e)
        {
            Console.WriteLine("PDF.JS Loaded.");
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

        /// <summary>
        /// Creates a PageRenderer asynchronously, and fires the 'onReady' parameter when the PageRenderer is ready to render pages.
        /// Due to the fact the PageRenderer uses PuppeteerSharp in the background, it's possible that there may be a significant
        /// delay when using this method for the first time. Chrome has to be available in the current application's path, and if it
        /// is not, it will be downloaded. Subsequent calls of 'CreateAsync' will be much faster.
        /// </summary>
        /// <param name="onReady">A callback action which fires when the PageRenderer is ready.</param>
        /// <returns>The PageRenderer object.</returns>
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
                        Width = item.width.HasValue ? item.width.Value : 0,
                        Height = item.height.HasValue ? item.height.Value : 0,
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

        /// <summary>
        /// Gets the text found on a page. This method only returns the text as a string, and doesn't retain any formatting information about the text.
        /// </summary>
        /// <param name="pageNumber">The zero-based page number to retrieve the text for.</param>
        /// <returns>Any text visible on the page as a string.</returns>
        public string GetText(int pageNumber)
        {
            Task<string> task = GetTextAsync(pageNumber);
            task.Wait();
            return task.Result;
        }

        /// <summary>
        /// Gets the text found on a page. This method only returns the text as a string, and doesn't retain any formatting information about the text.
        /// </summary>
        /// <param name="pageNumber">The zero-based page number to retrieve the text for.</param>
        /// <returns>Any text visible on the page as a string.</returns>
        public async Task<string> GetTextAsync(int pageNumber)
        {
            if (pageNumber > -1 && pageNumber < PageCount)
            {
                string textContent = await chromePage.EvaluateFunctionAsync<string>("getText", new[] { (pageNumber + 1).ToString() });
                return textContent;
            }
            return null;
        }

        public Size GetPageSize(int pageNumber, float scale)
        {
            Task<Size> t = GetPageSizeAsync(pageNumber, scale);
            t.Wait();
            return t.Result;
        }

        public async Task<Size> GetPageSizeAsync(int pageNumber, float scale)
        {
            PageViewport viewport = await GetPageViewport(pageNumber, scale);
            return new Size((int)Math.Round(viewport.width), (int)Math.Round(viewport.height));
        }

        /// <summary>
        /// Renders a page to a System.Drawing.Bitmap object.
        /// </summary>
        /// <param name="pageNumber">The zero-based page number.</param>
        /// <param name="pageScale">The page scale to use - a larger scale equates to a bigger final image. If you unsure of what scale to use, start at 1.0.</param>
        /// <returns>The Bitmap object containing the rendered page.</returns>
        public Bitmap RenderPage(int pageNumber, double pageScale)
        {
            Task<Bitmap> t = RenderPageAsync(pageNumber, pageScale);
            t.Wait();
            return t.Result;
        }

        /// <summary>
        /// Renders a page to a System.Drawing.Bitmap object, and sets a maximum width and height for the resultant image.
        /// Note that using the maximum width and height will not force the page to use those sizes. First, aspect-ratio is
        /// always maintained, so this method is designed to ensure the rendered page will fit inside the box defined by
        /// maxWidth and maxHeight. Secondly, this method will not scale the document up to fill the requested space.
        /// </summary>
        /// <param name="pageNumber">The zero-based page number.</param>
        /// <param name="maxWidth">The maximum width in pixels that the rendered page is allowed to be.</param>
        /// <param name="maxHeight">The maximum height in pixels that the rendered page is allowed to be.</param>
        /// <returns>The Bitmap object containing the rendered page.</returns>
        public Bitmap RenderPage(int pageNumber, int maxWidth, int maxHeight)
        {
            Task<Bitmap> t = RenderPageAsync(pageNumber, maxWidth, maxHeight);
            t.Wait();
            return t.Result;
        }

        /// <summary>
        /// Renders a page to a System.Drawing.Bitmap object, and sets a maximum width and height for the resultant image.
        /// Note that using the maximum width and height will not force the page to use those sizes. First, aspect-ratio is
        /// always maintained, so this method is designed to ensure the rendered page will fit inside the box defined by
        /// maxWidth and maxHeight. Secondly, this method will not scale the document up to fill the requested space.
        /// </summary>
        /// <param name="pageNumber">The zero-based page number.</param>
        /// <param name="maxWidth">The maximum width in pixels that the rendered page is allowed to be.</param>
        /// <param name="maxHeight">The maximum height in pixels that the rendered page is allowed to be.</param>
        /// <returns>The Bitmap object containing the rendered page.</returns>
        public async Task<Bitmap> RenderPageAsync(int pageNumber, int maxWidth, int maxHeight)
        {
            // This function is slightly annoying in that it's going to end up calling GetPageViewport twice,
            // when one call would really suffice. Should really restructure to remove the unnecessary call.
            double pageScale = 1.0;
            PageViewport viewport = await GetPageViewport(pageNumber, 1.0f);
            if(viewport.width > maxWidth || viewport.height > maxHeight)
            {
                // the viewport width or height is bigger than the maximum we want to allow, so we need to alter the page scale
                pageScale = Math.Min(maxWidth / viewport.width, maxHeight / viewport.height);
            }
            return await RenderPageAsync(pageNumber, pageScale);
        }

        /// <summary>
        /// Renders a page to a System.Drawing.Bitmap object.
        /// </summary>
        /// <param name="pageNumber">The zero-based page number.</param>
        /// <param name="pageScale">The page scale to use - a larger scale equates to a bigger final image. If you unsure of what scale to use, start at 1.0.</param>
        /// <returns>The Bitmap object containing the rendered page.</returns>
        public async Task<Bitmap> RenderPageAsync(int pageNumber, double pageScale)
        {
            PageViewport viewport = await GetPageViewport(pageNumber, (float)pageScale);
            int newWidth = (int)Math.Round(viewport.width);
            int newHeight = (int)Math.Round(viewport.height);

            if(chromePage.Viewport.Width != newWidth || chromePage.Viewport.Height != newHeight)
            {
                await chromePage.SetViewportAsync(new ViewPortOptions()
                {
                    Width = (int)Math.Round(viewport.width),
                    Height = (int)Math.Round(viewport.height)
                });
            }

            bool rendered = await chromePage.EvaluateFunctionAsync<bool>("renderPage", new[] { (pageNumber + 1).ToString(), pageScale.ToString() });
            //if (!renderEvent.WaitOne(5000))
            //{
            //    Console.WriteLine("RenderPage renderEvent timed out.");
            //}
            return await GetPage(pageScale);
        }

        /// <summary>
        /// Loads a PDF from disk given the requested filename.
        /// </summary>
        /// <param name="filename">The filename of the PDF.</param>
        public void LoadPDF(string filename)
        {
            pdfLoadEvent.Reset();
            LoadPDFAsync(filename);
            pdfLoadEvent.WaitOne();
        }

        /// <summary>
        /// Loads a PDF from a byte array.
        /// </summary>
        /// <param name="buffer">The byte array containing the PDF data.</param>
        public void LoadPDF(byte[] buffer)
        {
            pdfLoadEvent.Reset();
            LoadPDFAsync(buffer);
            pdfLoadEvent.WaitOne();
        }

        /// <summary>
        /// Loads a PDF from a stream. Reading begins from wherever the stream's position is currently set - it will not be reset to 0.
        /// </summary>
        /// <param name="stream">The stream containing the PDF data.</param>
        public void LoadPDF(Stream stream)
        {
            pdfLoadEvent.Reset();
            LoadPDFAsync(stream);
            pdfLoadEvent.WaitOne();
        }

        /// <summary>
        /// Loads a PDF from disk given the requested filename.
        /// </summary>
        /// <param name="filename">The filename of the PDF.</param>
        public async void LoadPDFAsync(string filename)
        {
            FileStream fStream = new FileStream(filename, FileMode.Open, FileAccess.Read);
            byte[] buffer = new byte[fStream.Length];
            byte[] chunk = new byte[4096];
            while (fStream.Position < fStream.Length) {
                long offset = fStream.Position;
                int bytes = await fStream.ReadAsync(chunk, 0, chunk.Length);
                Array.Copy(chunk, 0, buffer, offset, bytes);
            }
            LoadPDFAsync(buffer);
        }

        /// <summary>
        /// Loads a PDF from a stream. Reading begins from wherever the stream's position is currently set - it will not be reset to 0.
        /// </summary>
        /// <param name="stream">The stream containing the PDF data.</param>
        public async void LoadPDFAsync(Stream stream)
        {
            byte[] buffer = new byte[stream.Length - stream.Position];
            byte[] chunk = new byte[4096];
            while (stream.Position < stream.Length)
            {
                long offset = stream.Position;
                int bytes = await stream.ReadAsync(chunk, 0, chunk.Length);
                Array.Copy(chunk, 0, buffer, offset, bytes);
            }
            LoadPDFAsync(buffer);
        }

        /// <summary>
        /// Loads a PDF from a byte array.
        /// </summary>
        /// <param name="buffer">The byte array containing the PDF data.</param>
        public async void LoadPDFAsync(byte[] buffer)
        {
            if (!_pdfLoadWaiting)
            {
                _pdfLoadWaiting = true;
                var asBase64 = Convert.ToBase64String(buffer);
                PageCount = await chromePage.EvaluateFunctionAsync<int>("openPdfAsBase64", new[] { asBase64 });
                Console.WriteLine("PDF Loaded.");
                _pdfLoadWaiting = false;
                pdfLoadEvent.Set();

                if (OnPDFLoaded != null)
                {
                    new Task(() =>
                    {
                        OnPDFLoaded(this, new EventArgs());
                    }).Start();
                }
            }
            else
            {
                throw new Exception("A PDF file is already waiting to be loaded.");
            }
        }

        public async Task<PageViewport> GetPageViewport(int pageNumber, float pageScale)
        {
            string viewportJSON = await chromePage.EvaluateFunctionAsync<string>("getPageViewport", new[] { (pageNumber + 1).ToString(), pageScale.ToString() });
            return Newtonsoft.Json.JsonConvert.DeserializeObject<PageViewport>(viewportJSON);
        }

        public List<Annotation> GetAnnotations(int pageNumber)
        {
            Task<List<Annotation>> t = GetAnnotationsAsync(pageNumber);
            t.Wait();
            return t.Result;
        }

        public async Task<List<Annotation>> GetAnnotationsAsync(int pageNumber)
        {
            string annotationJSON = await chromePage.EvaluateFunctionAsync<string>("getAnnotations", new[] { (pageNumber + 1).ToString() });
            PageViewport viewport = await GetPageViewport(pageNumber, 1);
            List<Annotation> annotations = Newtonsoft.Json.JsonConvert.DeserializeObject<List<Annotation>>(annotationJSON);

            foreach(Annotation a in annotations)
            {
                // reverse the Y-coordinate to convert from PDF coordinates
                if(a.rect != null)
                {
                    if(a.rect.Count == 4)
                    {
                        a.rect[1] = viewport.height - a.rect[1];
                        a.rect[3] = viewport.height - a.rect[3];
                        float newY = a.rect[3];
                        a.rect[3] = a.rect[1];
                        a.rect[1] = newY;
                    }
                }
            }

            return annotations;
        }

        private async Task<Bitmap> GetPage(double pageScale)
        {
            if (chromePage != null)
            {
                MemoryStream mStream = new MemoryStream(await chromePage.ScreenshotDataAsync());
                mStream.Position = 0;
                // our screenshot has a few extra pixels on the right to allow 'breathing space' for the PDF
                // to display full-screen, so we need to remove that.
                Bitmap screenShot = new Bitmap(mStream);
                //Bitmap outBmp = new Bitmap((int)(screenShot.Width - Math.Round(pageScale) - 1), screenShot.Height);
                Bitmap outBmp = new Bitmap(screenShot.Width, screenShot.Height);
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