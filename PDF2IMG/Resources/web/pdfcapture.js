﻿var startedLoading = false;

window.openPdfAsBase64 = function (base64) {
    console.log("openPdfAsBase64");
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

window.getPageViewport = function (pageNumber, pageScale) {
    return new Promise((resolve, reject) => {
        pageNumber = parseInt(pageNumber);
        pageScale = parseFloat(pageScale);
        PDFViewerApplication.pdfDocument.getPage(pageNumber).then((page) => {
            var viewport = page.getViewport(pageScale);
            resolve(JSON.stringify(viewport));
        });
    });
};

window.gotoPage = function (pageNumber) {
    pageNumber = parseInt(pageNumber);
    PDFViewerApplication.pdfViewer.currentPageNumber = pageNumber;
};

window.setCurrentPage = function (pageNumber, pageScale) {
    pageNumber = parseInt(pageNumber);
    pageScale = parseFloat(pageScale);
    console.log('setting page number to: ' + pageNumber);
    PDFViewerApplication.pdfViewer.currentPageNumber = pageNumber;
    PDFViewerApplication.pdfDocument.getPage(pageNumber).then((page) => {
        var viewport = page.getViewport(1);
        viewport.width = viewport.width * pageScale;
        viewport.height = viewport.height * pageScale;
        pageOpened(JSON.stringify(viewport), pageNumber, pageScale);
    }, 10);
};

window.getTextContent = function (pageNumber) {
    return new Promise((resolve, reject) => {
        pageNumber = parseInt(pageNumber);
        PDFViewerApplication.pdfDocument.getPage(pageNumber).then(
            (page) => {
                page.getTextContent().then(
                    (content) => {
                        content.viewport = page.getViewport(1);
                        resolve(JSON.stringify(content));
                    }
                );
            }
        );
    });
};

window.getTextContentWithCallback = function (pageNumber, callbackid) {
    pageNumber = parseInt(pageNumber);
    PDFViewerApplication.pdfDocument.getPage(pageNumber).then(
        (page) => {
            page.getTextContent().then(
                (content) => {
                    content.viewport = page.getViewport(1);
                    viewerCallback.textContentCallback(pageNumber, JSON.stringify(content), callbackid);
                }
            );
        }
    );
};

window.getText = function (pageNumber) {
    return new Promise((resolve, reject) => {
        pageNumber = parseInt(pageNumber);
        PDFViewerApplication.pdfDocument.getPage(pageNumber).then(
            (page) => {
                page.getTextContent().then(
                    (content) => {
                        var outStr = "";
                        for (var i = 0; i < content.items.length; i++) {
                            outStr += content.items[i].str + " ";
                        }
                        resolve(outStr);
                    }
                );
            }
        );
    });
};

document.addEventListener('textlayerrendered', function (event) {
    // was this the last page?
    if (event.detail.pageNumber === PDFViewerApplication.page) {
        if (startedLoading) {
            console.log('Finished loading!');
            console.log("numPages: " + PDFViewerApplication.pdfDocument.numPages);
            pdfLoaded(PDFViewerApplication.pdfDocument.numPages);
            startedLoading = false;
        }

        console.log('Finished rendering!');
        pdfRendered(PDFViewerApplication.pdfViewer.currentPageNumber);
    }
}, true);