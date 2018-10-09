using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using PdfToImage;

namespace BarnardTech
{
    public class Pdf2Image
    {
        public enum OutputFormat
        {
            pngmono, png16, png256, pnggray, png16m
        }

        private static string mGSPath = null;
        public static string GSPath
        {
            get { return mGSPath; }
            set { mGSPath = value; }
        }

        private static int mPrintQuality = 80;
        public static int PrintQuality
        {
            get { return mPrintQuality; }
            set { mPrintQuality = value; }
        }

        private static string getDataPath(string relativePath)
        {
            string dataDir = Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData);
            return Path.Combine(dataDir, relativePath);
        }

        public static string GetAppRoot(out string error)
        {
            error = null;
            try
            {
                return Path.GetDirectoryName(Assembly.GetExecutingAssembly().GetModules()[0].FullyQualifiedName);
            }
            catch (IOException e)
            {
                error = "Can't get app root directory\n" + e.StackTrace;
            }
            return null;
        }

        public static string GetProgramFilePath(string relative_path, out string error)
        {
            string app_root = GetAppRoot(out error);
            return app_root + "\\" + relative_path;
        }

        public static string GetProgramFilePath(string relative_path)
        {
            string error;
            string app_root = GetAppRoot(out error);
            return app_root + "\\" + relative_path;
        }

        public static List<string> Convert(string filename, string img_filename, OutputFormat output_format, int resolution = 300)
        {
            string error = null;
            List<string> errors = new List<string>();
            String gsPath = GetProgramFilePath("gsdll32.dll", out error);
            if (!System.IO.File.Exists(gsPath))
            {
                var assembly = typeof(Pdf2Image).GetTypeInfo().Assembly;
                using (var stream = assembly.GetManifestResourceStream("PDF2IMG.Resources.gsdll32.dll"))
                {
                    using (var reader = new BinaryReader(stream))
                    {
                        File.WriteAllBytes(gsPath, reader.ReadBytes((int)stream.Length));
                    }
                }
            }
            if (error != null) errors.Add(error);

            if (File.Exists(img_filename))
            {
                File.Delete(img_filename);
            }

            //This is the object that perform the real conversion!
            PDFConvert converter = new PDFConvert();

            //Ok now check what version is!
            GhostScriptRevision version = converter.GetRevision();

            //lblVersion.Text = version.intRevision.ToString() + " " + version.intRevisionDate;
            bool Converted = false;
            //Setup the converter
            converter.RenderingThreads = -1;
            converter.TextAlphaBit = -1;
            converter.TextAlphaBit = -1;

            converter.FitPage = true;
            converter.JPEGQuality = mPrintQuality; //80
            converter.OutputFormat = output_format.ToString();

            converter.OutputToMultipleFile = false;
            converter.FirstPageToConvert = -1;
            converter.LastPageToConvert = -1;

            converter.ResolutionX = converter.ResolutionY = resolution;

            System.IO.FileInfo input = new FileInfo(filename);
            if (!string.IsNullOrEmpty(mGSPath))
            {
                converter.GSPath = mGSPath;
            }
            Converted = converter.Convert(input.FullName, img_filename);

            return errors;
        }
    }
}
