using System;
using System.Collections.Generic;
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
            pRender.LoadPDF("compressed.tracemonkey-pldi-09.pdf");
            Console.WriteLine("Getting page images...");
            for (int i = 0; i < pRender.PageCount; i++)
            {
                pRender.RenderPage(i, 1).Save("capture_" + (i + 1) + ".png");
            }
            Console.WriteLine("Done.");
            Console.ReadLine();
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
