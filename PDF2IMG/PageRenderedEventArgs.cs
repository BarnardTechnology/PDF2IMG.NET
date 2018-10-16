using System;
using System.Collections.Generic;
using System.Drawing;
using System.Text;

namespace BarnardTech.PDF2IMG
{
    public class PageRenderedEventArgs : EventArgs
    {
        public int PageNumber;
        public Bitmap PageImage;
    }
}
