var startedLoading = false;

window.openPdfAsBase64 = function (base64) {
    startedLoading = true;
    var binary_string = window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }

    PDFViewerApplication.open(bytes).then(() => {
        console.log("RequestPresentationMode...");
        PDFViewerApplication.pdfPresentationMode.args = { page: 1 };
        PDFViewerApplication.pdfPresentationMode._enter();
        //console.log(PDFViewerApplication.pdfPresentationMode.request());
        //setTimeout(() => {
        //    PDFViewerApplication.pdfPresentationMode.args = { page: 1 };
        //    PDFViewerApplication.pdfPresentationMode._enter();
        //    console.log("numPages: " + PDFViewerApplication.pdfDocument.numPages);
        //    viewerCallback.pdfLoaded(PDFViewerApplication.pdfDocument.numPages);
        //});
    });
};


window.setCurrentPage = function (pageNumber) {
    pageNumber = parseInt(pageNumber);
    console.log('setting page number to: ' + pageNumber);
    PDFViewerApplication.pdfViewer.currentPageNumber = pageNumber;
    PDFViewerApplication.pdfDocument.getPage(pageNumber).then((page) => {
        viewerCallback.pageOpened(JSON.stringify(page.getViewport(1)), pageNumber);
    }, 10);
};

document.addEventListener('textlayerrendered', function (event) {
    // was this the last page?
    if (event.detail.pageNumber === PDFViewerApplication.page) {
        if (startedLoading) {
            console.log('Finished loading!');
            console.log("numPages: " + PDFViewerApplication.pdfDocument.numPages);
            viewerCallback.pdfLoaded(PDFViewerApplication.pdfDocument.numPages);
            startedLoading = false;
        }

        console.log('Finished rendering!');
        viewerCallback.pdfRendered(PDFViewerApplication.pdfViewer.currentPageNumber);
    }
}, true);