# PDF2IMG.NET

PDF to Image Converter Library for .Net, using PuppeteerSharp and PDF.JS

This library is based on the [PDF2PNG](https://github.com/chen0040/cs-pdf-to-image) library by [@chen0040](https://github.com/chen0040).

I've made some very minor improvements for my own usage, and wanted to put these changes up on NuGet, so I created a new repo for it.


# UPDATES

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

# Limitations

Major problems I'm having at the moment are primarily around the page rendering when larger scales are used. In general,
I'm finding that page scales of 2 and above are slowing down the rendering to a point where sometimes the browser hasn't
finished the render before the capture is taken, leading to half-rendered pages being saves to disk.

A simple solution would be to set an arbitrary wait time before the render happens, and increase this wait time as the
page size increases - but this would be haphazard to say the least. Ideally, I'll find some sort of event I can hook
into on the browser side that signals the render has complete.