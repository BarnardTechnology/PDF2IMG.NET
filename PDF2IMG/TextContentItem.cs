using System;
using System.Collections.Generic;
using System.Text;

namespace BarnardTech.PDF2IMG
{
    public enum TextDirection
    {
        LeftToRight, RightToLeft
    }

    public class TextContentChar
    {
        public string Character;
        public double X;
        public double Y;
    }

    public class TextContentItem
    {
        public string Text;
        public TextDirection Direction;
        public double Width;
        public double Height;
        public double X;
        public double Y;
        public string FontName;
        public List<TextContentChar> Chars;
    }
}
