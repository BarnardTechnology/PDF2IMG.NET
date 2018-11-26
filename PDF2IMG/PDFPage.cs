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
        public int Rotate;
        public RectangleF MediaBox;
        private Page _chromePage;

        public float Width {
            get
            {
                if(Rotate == 90 || Rotate == 270)
                {
                    return MediaBox.Height;
                }
                else
                {
                    return MediaBox.Width;
                }
            }
        }

        public float Height
        {
            get
            {
                if (Rotate == 90 || Rotate == 270)
                {
                    return MediaBox.Width;
                }
                else
                {
                    return MediaBox.Height;
                }
            }
        }

        public PDFPage(int index, RectangleF mediaBox, Page chromePage)
        {
            Index = index;
            MediaBox = mediaBox;
            _chromePage = chromePage;
        }
    }
}