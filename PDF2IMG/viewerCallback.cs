using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace BarnardTech.PDF2IMG
{
    internal class viewerCallback
    {
        private PageRenderer _pRender;
        private PuppeteerSharp.Page _chromePage;

        public viewerCallback(PuppeteerSharp.Page page, PageRenderer pRender)
        {
            _chromePage = page;
            _pRender = pRender;
        }

        //public void pdfLoaded(int numPages)
        //{
        //    _pRender.OnPdfLoaded(numPages);
        //}

        public void pageOpened(string viewportJSON, int pageNumber)
        {
            //PageViewport viewport = JsonConvert.DeserializeObject<PageViewport>(viewportJSON);
            //_pRender.OnPageOpened(viewport, pageNumber);
        }

        //public void pdfRendered(int pageNumber)
        //{
        //    _pRender.OnPdfRendered(pageNumber);
        //}

        public void textContent(int pageNumber, string contentJSON)
        {
            InternalTextContent tContent = JsonConvert.DeserializeObject<InternalTextContent>(contentJSON);
            _pRender.gotTextContents(pageNumber, tContent);
        }

        public void textContentCallback(int pageNumber, string contentJSON, string callbackID)
        {
            new System.Threading.Tasks.Task(() =>
            {
                InternalTextContent tContent = JsonConvert.DeserializeObject<InternalTextContent>(contentJSON);
                _pRender.gotTextContentsCallback(pageNumber, tContent, callbackID);
            }).Start();
        }

        public void textOnly(int pageNumber, string text)
        {
            _pRender.gotText(pageNumber, text);
        }
    }

    internal class InternalTextContent
    {
        public List<InternalTextContentItem> items;
        public Dictionary<string, InternalTextContentStyle> styles;
        public PageViewport viewport;
    }

    internal class InternalTextContentItem
    {
        public string dir;
        public string fontName;
        public double height;
        public string str;
        public List<double> transform;
        public double width;
        public List<TextContentChar> chars;
    }

    internal class InternalTextContentStyle
    {
        public double ascent;
        public double descent;
        public string fontFamily;
        public bool vertical;
    }

    public class PageViewport
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
