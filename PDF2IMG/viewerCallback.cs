using System;
using System.Collections.Generic;
using System.Drawing;
using System.Text;
using Newtonsoft.Json;

// TODO: This file is a bit of a mess, as it isn't being used for its original function anymore, but a bunch of classes
//       that we do still need are in here. Should be separated up into sensibly-named files/folders.
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

    public class AnnotationColor
    {
        [JsonProperty("0")]
        public byte R;
        [JsonProperty("1")]
        public byte G;
        [JsonProperty("2")]
        public byte B;
    }

    public class Annotation
    {
        [JsonProperty()]
        internal AnnotationFlag annotationFlags;
        [JsonProperty()]
        internal AnnotationType annotationType;
        [JsonProperty()]
        internal AnnotationBorderStyle borderStyle;
        [JsonProperty()]
        internal AnnotationColor color;
        [JsonProperty()]
        internal bool hasAppearance;
        [JsonProperty()]
        internal string id;
        [JsonProperty()]
        internal List<float> rect;
        [JsonProperty()]
        internal string subtype;
        [JsonProperty()]
        internal string unsafeUrl;
        [JsonProperty()]
        internal string url;

        public RectangleF Rect
        {
            get
            {
                if (rect != null)
                {
                    if (rect.Count == 4)
                    {
                        return new RectangleF(rect[0], rect[1], rect[2] - rect[0], rect[3] - rect[1]);
                    }
                }
                return new RectangleF();
            }
        }

        public bool HasFlag(AnnotationFlag flag)
        {
            return annotationFlags.HasFlag(flag);
        }

        public AnnotationType Type
        {
            get
            {
                return annotationType;
            }
        }

        public string Url
        {
            get
            {
                return url;
            }
        }

        public string UnsafeUrl
        {
            get
            {
                return unsafeUrl;
            }
        }
    }

    internal class AnnotationBorderStyle
    {
        public List<int> dashArray;
        public double horizontalCornerRadius;
        public double verticalCornerRadius;
        public double width;
        [JsonProperty()]
        internal AnnotationBorderStyleType style;
    }

    public enum AnnotationBorderStyleType
    {
        SOLID = 1,
        DASHED = 2,
        BEVELED = 3,
        INSET = 4,
        UNDERLINE = 5
    }

    public enum AnnotationFlag
    {
        INVISIBLE = 0x01,
        HIDDEN = 0x02,
        PRINT = 0x04,
        NOZOOM = 0x08,
        NOROTATE = 0x10,
        NOVIEW = 0x20,
        READONLY = 0x40,
        LOCKED = 0x80,
        TOGGLENOVIEW = 0x100,
        LOCKEDCONTENTS = 0x200
    }

    public enum AnnotationType
    {
        TEXT = 1,
        LINK = 2,
        FREETEXT = 3,
        LINE = 4,
        SQUARE = 5,
        CIRCLE = 6,
        POLYGON = 7,
        POLYLINE = 8,
        HIGHLIGHT = 9,
        UNDERLINE = 10,
        SQUIGGLY = 11,
        STRIKEOUT = 12,
        STAMP = 13,
        CARET = 14,
        INK = 15,
        POPUP = 16,
        FILEATTACHMENT = 17,
        SOUND = 18,
        MOVIE = 19,
        WIDGET = 20,
        SCREEN = 21,
        PRINTERMARK = 22,
        TRAPNET = 23,
        WATERMARK = 24,
        THREED = 25,
        REDACT = 26
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
