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
            pRender = new PageRenderer(() =>
            {
                Console.WriteLine("Page renderer ready.");
                pRender.LoadPDF("compressed.tracemonkey-pldi-09.pdf");
            });

            //pRender = new PageRenderer(() =>
            //{
            //    Console.WriteLine("Page renderer ready.");

            //    pRender.LoadPDF("compressed.tracemonkey-pldi-09.pdf", () =>
            //    {
            //        //pRender.GotoPage(1);
            //        //pRender.GetTextContent(1);
            //    },
            //    (pageNumber) =>
            //    {
            //        //System.Drawing.Bitmap bmp = null;
            //        //bmp = pRender.GetPage();

            //        //if (bmp != null)
            //        //{
            //        //    Console.WriteLine("Saving...");
            //        //    bmp.Save("capture_" + pageNumber + ".png");
            //        //}
            //        //else
            //        //{
            //        //    Console.WriteLine("Can't save?");
            //        //}

            //        //if(pageNumber < pRender.PageCount)
            //        //{
            //        //    //pRender.GotoPage(pageNumber + 1);
            //        //}
            //    });
            //});

            pRender.OnGotTextContent += PRender_OnGotTextContent;
            pRender.OnPageRendered += PRender_OnPageRendered;
            pRender.OnPDFLoaded += PRender_OnPDFLoaded;

            Console.ReadLine();
        }

        private static void PRender_OnPDFLoaded(object sender, EventArgs eventArgs)
        {
            pRender.GotoPage(1);
            pRender.GetTextContent(1);
        }

        private static void PRender_OnPageRendered(object sender, PageRenderedEventArgs eventArgs)
        {
            if (eventArgs.PageImage != null)
            {
                Console.WriteLine("Saving...");
                eventArgs.PageImage.Save("capture_" + eventArgs.PageNumber + ".png");
            }
            else
            {
                Console.WriteLine("Can't save?");
            }

            //if (eventArgs.PageNumber < pRender.PageCount)
            //{
                //pRender.GotoPage(pageNumber + 1);
            //}
        }

        private static void PRender_OnGotTextContent(object sender, TextContentEventArgs eventArgs)
        {
            Console.WriteLine("Got text content!");
            foreach (TextContentItem item in eventArgs.TextContent)
            {
                Console.WriteLine(item.Text);
            }
        }

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
