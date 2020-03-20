using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Threading;
using System.Threading.Tasks;
using PuppeteerSharp;

namespace BarnardTech.PDF2IMG
{
    public class PDFDocument : IDisposable
    {
        public event PDFLoadedDelegate OnPDFLoaded;

        Browser chromeBrowser;
        Page chromePage;

        List<PDFPage> pdfPages = new List<PDFPage>();

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
        public PDFDocument()
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

        private PDFDocument(Browser browser, Page page, Action onReady)
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
            page.GoToAsync("http://host/web/pdfedit.html");
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
        /// Loads a PDF from disk given the requested filename.
        /// </summary>
        /// <param name="filename">The filename of the PDF.</param>
        public void LoadPDF(string filename)
        {
            pdfPages = new List<PDFPage>();
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
            while (fStream.Position < fStream.Length)
            {
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
                try
                {
                    PageCount = await chromePage.EvaluateFunctionAsync<int>("loadPDF", new[] { asBase64 });
                }
                catch (Exception ex)
                {
                    throw new Exception("Cannot load PDF", ex);
                }
                Console.WriteLine("PDF Loaded.");

                for (int i = 0; i < PageCount; i++)
                {
                    string rectJson = await chromePage.EvaluateFunctionAsync<string>("getMediaBox", new[] { i });
                    RectangleF mediaBox = Newtonsoft.Json.JsonConvert.DeserializeObject<RectangleF>(rectJson);
                    PDFPage p = new PDFPage(i, mediaBox, chromePage);
                    pdfPages.Add(p);

                    int rotation = await chromePage.EvaluateFunctionAsync<int>("getRotation", new[] { i });
                    p.Rotate = rotation;
                }

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

        public bool InsertImage(string imageName, Bitmap image, int pageNumber, RectangleF drawRect)
        {
            return InsertImage(imageName, image, pageNumber, drawRect.X, drawRect.Y, drawRect.Width, drawRect.Height);
        }

        public bool InsertImage(string imageName, Bitmap image, int pageNumber, float X, float Y, float Width, float Height)
        {
            Task<bool> t = InsertImageAsync(imageName, image, pageNumber, X, Y, Width, Height);
            t.Wait();
            return t.Result;
        }

        public async Task<bool> InsertImageAsync(string imageName, Bitmap image, int pageNumber, RectangleF drawRect)
        {
            return await InsertImageAsync(imageName, image, pageNumber, drawRect.X, drawRect.Y, drawRect.Width, drawRect.Height);
        }

        public async Task<bool> InsertImageAsync(string imageName, Bitmap image, int pageNumber, float X, float Y, float Width, float Height)
        {
            float outX;
            float outY;
            float outWidth;
            float outHeight;

            if (pdfPages[pageNumber].Rotate == 90 || pdfPages[pageNumber].Rotate == 270)
            {
                outWidth = Width;
                outHeight = Height;
                outX = Y + Height;
                outY = X;
            }
            else
            {
                outWidth = Width;
                outHeight = Height;
                outX = X;
                outY = pdfPages[pageNumber].MediaBox.Height - Y - Height;
            }

            Console.WriteLine("Page rotation: " + pdfPages[pageNumber].Rotate);
            // reverse Y coordinate
            //Y = pdfPages[pageNumber].MediaBox.Height - Y - Height;

            using (MemoryStream mStream = new MemoryStream())
            {
                image.Save(mStream, System.Drawing.Imaging.ImageFormat.Png);
                mStream.Position = 0;
                string asBase64 = Convert.ToBase64String(mStream.ToArray());
                return await chromePage.EvaluateFunctionAsync<bool>("insertPNG", new object[] { asBase64, imageName, pageNumber, outX, outY, outWidth, outHeight, pdfPages[pageNumber].Rotate });
            }
        }

        public bool SavePDF(string filename)
        {
            Task<bool> t = SavePDFAsync(filename);
            t.Wait();
            return t.Result;
        }

        public async Task<bool> SavePDFAsync(string filename)
        {
            string base64string = await chromePage.EvaluateFunctionAsync<string>("savePDF", new object[] { });
            byte[] pdfdata = Convert.FromBase64String(base64string);

            using (FileStream fStream = File.OpenWrite(filename))
            {
                using (BinaryWriter bStream = new BinaryWriter(fStream))
                {
                    bStream.Write(pdfdata);
                }
            }

            return true;
        }

        public bool SavePDFToStream(Stream stream)
        {
            Task<bool> t = SavePDFToStreamAsync(stream);
            t.Wait();
            return t.Result;
        }

        public async Task<bool> SavePDFToStreamAsync(Stream stream)
        {
            string base64string = await chromePage.EvaluateFunctionAsync<string>("savePDF", new object[] { });
            byte[] pdfdata = Convert.FromBase64String(base64string);
            stream.Write(pdfdata, 0, pdfdata.Length);
            return true;
        }

        public PDFPage GetPage(int pageNumber)
        {
            return pdfPages[pageNumber];
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
