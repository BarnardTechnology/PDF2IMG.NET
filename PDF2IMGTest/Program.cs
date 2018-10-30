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
            pRender = new PageRenderer();
            //pRender.OnPDFLoaded += PRender_OnPDFLoaded;
            Console.WriteLine("Loading PDF");
            //pRender.LoadPDF("compressed.tracemonkey-pldi-09.pdf");
            pRender.LoadPDF(@"C:\Users\chris.barnard\Desktop\Test documents\160427 Bristol Royal Infirmary Pre Construction Pack.pdf");
            Console.WriteLine("Getting page images...");
            for (int i = 0; i < pRender.PageCount; i++)
            {
                //pRender.RenderPage(i, 1280, 1280).Save("capture_" + (i + 1) + ".png");
                GetPageWithAnnotations(i).Save("capture_" + (i + 1) + ".png");
            }
            Console.WriteLine("Done.");
        }

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
