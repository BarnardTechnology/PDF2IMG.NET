using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PDF2IMGTest
{
    class Program
    {
        static void Main(string[] args)
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
