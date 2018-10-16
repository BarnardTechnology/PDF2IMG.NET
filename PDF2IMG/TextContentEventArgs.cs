using System;
using System.Collections.Generic;
using System.Text;

namespace BarnardTech.PDF2IMG
{
    public class TextContentEventArgs : EventArgs
    {
        public int PageNumber;
        public List<TextContentItem> TextContent;
        public PageViewport Viewport;
    }
}
