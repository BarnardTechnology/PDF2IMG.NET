# PDF2IMG.NET
PDF to PNG Converter Library for .Net, using GhostScript

This library is based on the [PDF2PNG](https://github.com/chen0040/cs-pdf-to-image) library by [@chen0040](https://github.com/chen0040).

I've made some very minor improvements for my own usage, and wanted to put these changes up on NuGet, so I created a new repo for it.

# UPDATE

This now has some pretty huge changes added to it - I've come up with an alternative solution to getting renders of PDF pages, using PDF.JS and CefSharp to render in an off-screen browser. The idea is, it should render identically to how a browser renders a PDF - but it is a bit more complicated!

The namespaces and class names are a bit all over the place due to the amount of additional coding I added, so a future version will tidy this all up.

# USAGE

Expect this to change and improve somewhat as I sort out a proper structure and introduce better Async methods.

For now, your basic syntax is:

```
using System.Drawing;
using BarnardTech.PDF2IMG;

class Program
{
	static void Main(string[] args])
	{
		string filename = args[0];

		PageRenderer p = null;
		// Create the renderer and provide a callback Action that will fire when the renderer is ready
		p = new PageRenderer(() => {
			// Load the PDF file.
			p.LoadPDFSync(filename);
			// Render the first page to a bitmap
			Bitmap bmp = p.RenderPageSync(1);
		});
	}
}
```

# Limitations

Currently, the renderer only provides pages at one specific height/width - this is whatever the dimensions are of the PDF with a scale set to 1. Usually, it'll create a page somewhere in the region of 600 pixels wide and 800 pixels high.

There are asynchronous methods which offer better performance for bulk page conversion, but if you try to call multiple page renders at the same time, it's likely there will be a clash in the rendering process. Therefore, it's better to use the Sync methods until I've written this code out properly and trapped a few potential error scenarios.