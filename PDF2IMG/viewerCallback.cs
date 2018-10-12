using System;
using System.Collections.Generic;
using System.Text;
using CefSharp.OffScreen;
using Newtonsoft.Json;

namespace BarnardTech
{
    internal class viewerCallback
    {
        private ChromiumWebBrowser _cefBrowser;
        private PageRenderer _pRender;

        public viewerCallback(ChromiumWebBrowser cefBrowser, PageRenderer pRender)
        {
            _cefBrowser = cefBrowser;
            _pRender = pRender;
        }

        public void pdfLoaded(int numPages)
        {
            _pRender.OnPdfLoaded(numPages);
        }

        public void pageOpened(string viewportJSON, int pageNumber)
        {
            PageViewport viewport = JsonConvert.DeserializeObject<PageViewport>(viewportJSON);
            _pRender.OnPageOpened(viewport, pageNumber);
        }

        public void pdfRendered(int pageNumber)
        {
            _pRender.OnPdfRendered(pageNumber);
        }
    }

    internal class PageViewport
    {
        public float width;
        public float height;
        public float offsetX;
        public float offsetY;
        public float scale;
        public float[] transform;
        public float[] viewBox;
    }
}
