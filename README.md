# PDF2IMG.NET

PDF to Image Converter Library for .NET, using PuppeteerSharp and PDF.JS

This library is based on the [PDF2PNG](https://github.com/chen0040/cs-pdf-to-image) library by [@chen0040](https://github.com/chen0040).

I've made some very minor improvements for my own usage, and wanted to put these changes up on NuGet, so I created a new repo for it.


# UPDATES

## v1.5.9

The rendering seems to be working very well now - it's stable and relatively fast. Large page scales are supported.
I completely reworked the primary webpage that Chrome uses to render the pages - rather than use PDF.JS' built-in
viewer, I built my own really quick canvas renderer which has solved a lot of the timing issues I was having getting
the rendered pages.

## v1.5.3

This is starting to work in a better way now, with a nicer structure and more reliable results. Still a lot of work to
do, but hopefully I'm not far off getting something stable, relatively efficient and capable of rendering with very
high quality.

## v1.5.1

I've had some issues using CefSharp, which I think isn't really designed for the type of work I was trying to
use it for - I had to hack it around a fair bit to get it running off-screen in the way I wanted.

So, I've switched over the PuppeteerSharp on the back-end and this seems to be playing quite nicely at the moment.

Still very much a work-in-progress.


# USAGE

Whilst there are Async functions and callback events to aid in scenarios where non-blocking of the calling thread is
required, the simplest coding pattern will block at every call and only return once the required function has completed.

This means we can get up-and-running converting pages with the following code:

```
var pRender = new PageRenderer();
pRender.LoadPDF("compressed.tracemonkey-pldi-09.pdf");
for (int i = 0; i < pRender.PageCount; i++)
{
    pRender.RenderPage(i, 1).Save("capture_" + (i + 1) + ".png");
}
```

# Future work

I started out just trying to build something that would render PDF pages to images and would be totally open source.
Now I've started building additional classes using more open source projects to actually create and manipulate PDFs.
I don't currently know if I'll keep this under the same project - technically, PDF2IMG does what it says on the tin
now, so I may want to fork this into a new project.

Currently though, it's possible with the PDFDocument class to actually load PDF files in, add images, and then save
them back out again. I'll definitely be adding more functionality to this over time.
