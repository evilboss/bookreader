DashboardController = RouteController.extend({
    layoutTemplate: 'MasterLayout',
    waitOn: function () {
        return this.subscribe('books', this.params.id),
            this.subscribe('pdfs'),
            this.subscribe('categories'),
            this.subscribe('admins'),
            this.subscribe('uploads'),
            this.subscribe('userStatus'),
            this.subscribe('directory');
    },
    data: {
        Books: Books.find({}),
        Category: Category.find({}),
        Admins: Admins.find({}),
        uploads: Uploads.find({})

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
    uploadbook: function () {
        this.render('UploadBook');
    },
    viewBook: function () {
        this.render('BookInfo');
    },
    categoryList: function () {
        this.render('ListCategories');
    },
    newCategory: function () {
        this.render('Addcategory');
    },
    admin: function () {
        this.render('Admins');
    },
    adminAdd: function () {
        this.render('Addadmin');
    }
});
DashboardController.events({});
