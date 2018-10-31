using System;
using System.Collections.Generic;
using System.Drawing;
using System.Text;
using PuppeteerSharp;

namespace BarnardTech.PDF2IMG
{
    public class PDFPage
    {
        public int Index;
        public RectangleF MediaBox;
        private Page _chromePage;

        public PDFPage(int index, RectangleF mediaBox, Page chromePage)
        {
            Index = index;
            MediaBox = mediaBox;
            _chromePage = chromePage;
        }
    }
}