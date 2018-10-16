using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using CefSharp;

using BarnardTech.PDF2IMG;

namespace BarnardTech
{
    internal class FileResourceHandlerFactory : ISchemeHandlerFactory
    {
        private string scheme, host, folder, default_filename;

        public string Scheme => scheme;

        public FileResourceHandlerFactory(string scheme, string host, string folder, string default_filename = "index.html")
        {
            this.scheme = scheme;
            this.host = host;
            this.folder = folder;
            this.default_filename = default_filename;
        }

        private string[] manifestResourceNames = null;

        private string get_content(Uri uri, out string extension)
        {
            var path = uri.LocalPath.Substring(1);
            path = string.IsNullOrWhiteSpace(path) ? this.default_filename : path;
            extension = Path.GetExtension(path);

            path = path.Replace("/", ".").Replace("-", "_");

            var assembly = typeof(PageRenderer).GetTypeInfo().Assembly;

            if (manifestResourceNames == null)
            {
                // cache the resource names
                manifestResourceNames = assembly.GetManifestResourceNames();
            }

            //Console.WriteLine("looking for PDF.JS.Resources." + path);
            foreach (string mName in manifestResourceNames)
            {
                try
                {
                    if (mName.Replace("-", "_") == "BarnardTech.PDF2IMG.Resources." + path)
                    {
                        //Console.WriteLine("found " + path);
                        using (var stream = assembly.GetManifestResourceStream(mName))
                        {
                            if (stream == null)
                            {
                                throw new IOException("File not found.");
                            }
                            using (var sRead = new StreamReader(stream))
                            {
                                return sRead.ReadToEnd();
                            }
                        }
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.ToString());
                }
            }
            Console.WriteLine("Couldn't find " + uri.LocalPath);
            return "Not found.";
            //return File.ReadAllText(Path.Combine(this.folder, path));
        }

        IResourceHandler ISchemeHandlerFactory.Create(IBrowser browser, IFrame frame, string schemeName, IRequest request)
        {
            var uri = new Uri(request.Url);
            return ResourceHandler.FromString(get_content(uri, out var extension), extension);
        }
    }
}
