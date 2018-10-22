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
            //pRender = new PageRenderer(() =>
            //{
            //    Console.WriteLine("Page renderer ready.");
            //    pRender.LoadPDF("compressed.tracemonkey-pldi-09.pdf");
            //});

            Task<PageRenderer> task = PageRenderer.Create(() =>
            {
                Console.WriteLine("Loading PDF");
                pRender.LoadPDF("compressed.tracemonkey-pldi-09.pdf");
            });
            //task.Start();
            task.Wait();

            pRender = task.Result;

            //pRender.LoadPDF("compressed.tracemonkey-pldi-09.pdf");

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

        private async static void PRender_OnPDFLoaded(object sender, EventArgs eventArgs)
        {
            Console.WriteLine("PDF Loaded!");
            //Task<System.Drawing.Bitmap> tBmp = pRender.RenderPageSync(2, 2);
            //tBmp.Wait();
            //tBmp.Result.Save("capture_2.png");


            //pRender.GetTextContentAsync(1);

            /*for (int i = 0; i < pRender.PageCount; i++)
            {
                pRender.RenderPage(i, 2).Save("capture_" + (i + 1) + ".png");
            }*/


            //DateTime startTime = DateTime.Now;
            for (int i = 0; i < pRender.PageCount; i++)
            {
                var contents = await pRender.GetTextContentAsync(i);
                Console.WriteLine("Page " + (i + 1));
            }
            ////TimeSpan timeTaken = DateTime.Now - startTime;

            for (int i = 0; i < pRender.PageCount; i++)
            {
                var text = await pRender.GetTextAsync(i);
                Console.WriteLine("Page " + (i + 1));
                //Console.WriteLine(text);
            }


            //startTime = DateTime.Now;
            //for (int i = 0; i < pRender.PageCount; i++)
            //{
            //    string text = pRender.GetTextSync(i + 1);
            //    //Console.WriteLine(text);
            //    Console.WriteLine("Page " + (i + 1));
            //    //pRender.RenderPageSync(i + 1).Save("capture_" + (i + 1) + ".png");
            //}
            //TimeSpan timeTaken2 = DateTime.Now - startTime;

            //Console.WriteLine("GetTextContentSync took " + timeTaken.TotalMilliseconds + "ms.");
            //Console.WriteLine("GetTextSync took " + timeTaken2.TotalMilliseconds + "ms.");

            //_startTime = DateTime.Now;
            //for (int i = 0; i < pRender.PageCount; i++)
            //{
            //    GetTextContents(i);
            //}
        }

        //private static DateTime _startTime;
        //private static int pageCount = 0;

        static Dictionary<int, List<TextContentItem>> contents = new Dictionary<int, List<TextContentItem>>();

        private static void GetTextContents(int pageNumber)
        {
            //pRender.GetTextContentAsync(pageNumber + 1, (textContent) =>
            //{
            //    Console.WriteLine("Got page " + pageNumber);
            //    contents.Add(pageNumber, textContent);
            //    pageCount++;

            //    if(pageCount == pRender.PageCount)
            //    {
            //        Console.WriteLine("GetTextContentsAsync took " + (DateTime.Now - _startTime).TotalMilliseconds + "ms.");
            //    }
            //});
        }

        private static void PRender_OnPageRendered(object sender, PageRenderedEventArgs eventArgs)
        {

        }

        private static void PRender_OnGotTextContent(object sender, TextContentEventArgs eventArgs)
        {

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
