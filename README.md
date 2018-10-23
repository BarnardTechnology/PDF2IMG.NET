# PDF2IMG.NET
PDF to Image Converter Library for .Net, using PuppeteerSharp and PDF.JS

This library is based on the [PDF2PNG](https://github.com/chen0040/cs-pdf-to-image) library by [@chen0040](https://github.com/chen0040).

I've made some very minor improvements for my own usage, and wanted to put these changes up on NuGet, so I created a new repo for it.

# UPDATE (version 1.5.1)

I've had some issues using CefSharp, which I think isn't really designed for the type of work I was trying to
use it for - I had to hack it around a fair bit to get it running off-screen in the way I wanted.

So, I've switched over the PuppeteerSharp on the back-end and this seems to be playing quite nicely at the moment.

Still very much a work-in-progress.


# USAGE

I'll put up a basic page render example once things have calmed down a bit in terms of how it all structurally
fits together. Check out the Program.cs file in the PDF2IMGTest project for an idea of current usage.

# Limitations

The previous limitations have been fixed (you can now create pages at different sizes, there are async and non-async
methods for all major functions and AnyCPU is now supported).

The major limitation at the moment is that I'm constantly messing about with the structure while I get this working
in an efficient and programmer-friendly way, so basically, don't expect your code to work straight away from one
version to the next, and the output could be buggy at times.