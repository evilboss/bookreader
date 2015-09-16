DashboardController = AppController.extend({
    waitOn: function () {
        return this.subscribe('books', this.params.id),
            this.subscribe('pdfs'),
            this.subscribe('categories');
    },
    data: {
        Books: Books.find({}),
        PdfFile: PdfFile.find({}),
        Category: Category.find({})
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
    },
    categoryList:function(){
        this.render('ListCategories');
    }
});

DashboardController.events({});
