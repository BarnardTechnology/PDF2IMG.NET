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
            Task<PageRenderer> task = PageRenderer.Create(() =>
            {
                Console.WriteLine("Loading PDF");
                pRender.LoadPDF("compressed.tracemonkey-pldi-09.pdf");
            });
            task.Wait();

            pRender = task.Result;
            pRender.OnPDFLoaded += PRender_OnPDFLoaded;

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

        static Dictionary<int, List<TextContentItem>> contents = new Dictionary<int, List<TextContentItem>>();

        static void TestGSConversion(string[] args)
        {
            string pdf_filename = BarnardTech.Pdf2Image.GetProgramFilePath("compressed.tracemonkey-pldi-09.pdf");
            string png_filename = BarnardTech.Pdf2Image.GetProgramFilePath("converted.png");

            if (args.Length > 2)
            {
                pdf_filename = args[1];
                png_filename = args[2];
            }

            List<string> errors = BarnardTech.Pdf2Image.Convert(pdf_filename, png_filename, BarnardTech.Pdf2Image.OutputFormat.png16m);
            if (errors.Any())
            {
                foreach (string error in errors)
                {
                    Console.WriteLine(error);
                }
            }
            else
            {
                Console.WriteLine("Conversion is successful.");
            }
        }
    }
}
