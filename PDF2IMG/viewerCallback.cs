using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace BarnardTech.PDF2IMG
{
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
