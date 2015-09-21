DashboardController = AppController.extend({
    waitOn: function () {
        return this.subscribe('books', this.params.id),
            this.subscribe('pdfs'),
            this.subscribe('categories'),
            this.subscribe('admins');
    },
    data: {
        Books: Books.find({}),
        PdfFile: PdfFile.find({}),
        Category: Category.find({}),
        Admins:Admins.find({})
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
    },
    newCategory:function(){
        this.render('Addcategory');
    },
    admin:function(){
        this.render('Admins');
    },
    adminAdd:function(){
        this.render('Addadmin');
    }
});
DashboardController.events({
});
