# PDF2IMG.NET
PDF to PNG Converter Library for .Net, using GhostScript

This library is based on the [PDF2PNG](https://github.com/chen0040/cs-pdf-to-image) library by [@chen0040](https://github.com/chen0040).

I've made some very minor improvements for my own usage, and wanted to put these changes up on NuGet, so I created a new repo for it.

# UPDATE

This now has some pretty huge changes added to it - I've come up with an alternative solution to getting renders of PDF pages, using PDF.JS and CefSharp to render in an off-screen browser. The idea is, it should render identically to how a browser renders a PDF - but it is a bit more complicated!

The namespaces and class names are a bit all over the place due to the amount of additional coding I added, so a future version will tidy this all up.