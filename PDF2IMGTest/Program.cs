using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

using BarnardTech.PDF2IMG;

namespace PDF2IMGTest
{
    class Program
    {
        static PageRenderer pRender = null;

        static void Main(string[] args)
        {
            //Console.WriteLine("Render pages...");
            //pRender = new PageRenderer();
            //////pRender.OnPDFLoaded += PRender_OnPDFLoaded;
            //Console.WriteLine("Loading PDF");
            //pRender.LoadPDF("compressed.tracemonkey-pldi-09.pdf");
            //Console.WriteLine("Getting page images...");
            //for (int i = 0; i < pRender.PageCount; i++)
            //{
            //    pRender.RenderPage(i, 1280, 1280).Save("capture_" + (i + 1) + ".png");
            //}

            AddImageToPDF("maxresdefault.jpg");

            //pRender.Dispose();
            Console.WriteLine("Done.");
        }

        /// <summary>
        /// A really basic example to show the new, in-development functionality that will allow PDFs to be edited.
        /// </summary>
        /// <param name="bitmapFilename"></param>
        public static void AddImageToPDF(string bitmapFilename)
        {
            Console.WriteLine("Add image to PDF...");
            //Bitmap bmp = new Bitmap(bitmapFilename);
            PDFDocument pDoc = new PDFDocument();
            Console.WriteLine("Loading for editing...");
            pDoc.LoadPDF("compressed.tracemonkey-pldi-09.pdf");
            //PDFPage pPage = pDoc.GetPage(0);
            //Console.WriteLine("Inserting image...");
            //pDoc.InsertImage("testimage", bmp, 0, (pPage.Width / 2) - 75, (pPage.Height / 2) - 50, 150, 100);
            //Console.WriteLine("Saving...");
            //pDoc.SavePDF("pdfoutput.pdf");
            Console.WriteLine("Done...");
        }

        /// <summary>
        /// Example method to draw annotations (eg, links) on a page. Any annotations are outlined in red.
        /// </summary>
        /// <param name="pageNumber">The page number we wish to draw.</param>
        /// <returns>Returns a Bitmap object containing the rendered page with red rectangles signifying the position of each annotation.</returns>
        public static Bitmap GetPageWithAnnotations(int pageNumber)
        {
            Bitmap page = pRender.RenderPage(pageNumber, 1);
            Graphics g = Graphics.FromImage(page);
            List<Annotation> annots = pRender.GetAnnotations(pageNumber);
            foreach (Annotation a in annots)
            {
                g.DrawRectangle(Pens.Red, new Rectangle((int)Math.Round(a.Rect.X), (int)Math.Round(a.Rect.Y), (int)Math.Round(a.Rect.Width), (int)Math.Round(a.Rect.Height)));
            }
            return page;
        }

        private async static void PRender_OnPDFLoaded(object sender, EventArgs eventArgs)
        {
            Console.WriteLine("PDF Loaded!");
            
            Console.WriteLine("Getting text on pages...");
            for (int i = 0; i < pRender.PageCount; i++)
            {
                var text = await pRender.GetTextAsync(i);
                Console.WriteLine("Page " + (i + 1));
            }

            Console.WriteLine("Getting detailed text contents...");
            for (int i = 0; i < pRender.PageCount; i++)
            {
                var contents = await pRender.GetTextContentAsync(i);
                Console.WriteLine("Page " + (i + 1));
            }

            Console.WriteLine("Getting page images...");
            for (int i = 0; i < pRender.PageCount; i++)
            {
                (await pRender.RenderPageAsync(i, 1)).Save("capture_" + (i + 1) + ".png");
            }
        }
    }
}
