using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace PDF2IMGTest
{
    class Program
    {
        static void Main(string[] args)
        {
            BarnardTech.PageRenderer pRender = null;
            pRender = new BarnardTech.PageRenderer(() =>
            {
                Console.WriteLine("Page renderer ready.");

                pRender.LoadPDF("compressed.tracemonkey-pldi-09.pdf", () =>
                {
                    pRender.GotoPage(1);
                },
                (pageNumber) =>
                {
                    System.Drawing.Bitmap bmp = null;
                    bmp = pRender.GetPage();

                    if (bmp != null)
                    {
                        Console.WriteLine("Saving...");
                        bmp.Save("capture_" + pageNumber + ".png");
                    }
                    else
                    {
                        Console.WriteLine("Can't save?");
                    }

                    if(pageNumber < pRender.PageCount)
                    {
                        pRender.GotoPage(pageNumber + 1);
                    }
                });
            });

            Console.ReadLine();
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
