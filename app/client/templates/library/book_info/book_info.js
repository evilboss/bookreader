/*****************************************************************************/
/* BookInfo: Event Handlers */
/*****************************************************************************/
Template.BookInfo.events({});

/*****************************************************************************/
/* BookInfo: Helpers */
/*****************************************************************************/
Template.BookInfo.helpers({});

/*****************************************************************************/
/* BookInfo: Lifecycle Hooks */
/*****************************************************************************/
Template.BookInfo.created = function () {
};

Template.BookInfo.rendered = function () {
    PDFJS.workerSrc = '/packages/pascoual_pdfjs/build/pdf.worker.js';
// Create PDF
    PDFJS.getDocument('pdf.pdf').then(function renderPages(pdf) {


        for (var num = 1; num <= pdf.numPages; num++)
            pdf.getPage(num).then(function (page) {
                var scale = 1.5;
                var viewport = page.getViewport(scale);

                // Prepare canvas using PDF page dimensions
                var canvas = document.getElementById('pdfcanvas');
                var context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                // Render PDF page into canvas context
                var renderContext = {
                    canvasContext: context,
                    viewport: viewport
                };
                page.render(renderContext);
            });
    });
};

Template.BookInfo.destroyed = function () {
};
