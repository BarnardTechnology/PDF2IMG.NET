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

                //pRender.LoadPDF(@"C:\Users\chris.barnard\Downloads\standard-conditions-specimen.pdf", () =>
                pRender.LoadPDF(@"C:\Users\chris.barnard\Documents\GitHub\RGFileManager\RGFileIndexService\bin\Debug\temp_5f7d3de3-2f66-4e07-a6b8-eabaee30452f_.pdf", () =>
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
            string pdf_filename = BarnardTech.Pdf2Image.GetProgramFilePath("pdf-sample.pdf");
            string png_filename = BarnardTech.Pdf2Image.GetProgramFilePath("converted.png");

            if (!File.Exists(pdf_filename))
            {
                File.WriteAllBytes(pdf_filename, Properties.Resources.pdf_sample);
            }

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
