DashboardController = AppController.extend({
    waitOn: function () {
        return this.subscribe('books', this.params.id),
            this.subscribe('pdfs');
    },
    data: {
        Books: Books.find({}),
        PdfFile: PdfFile.find({})
    },
    onAfterAction: function () {
        Meta.setTitle('Library');
    },
    library: function () {
        this.render('library');
    },
    addbook: function () {
        this.render('AddBook');
    },
    viewBook: function () {
        this.render('BookInfo');
    }
});

DashboardController.events({});
