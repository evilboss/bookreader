CategoryController = RouteController.extend({
    waitOn: function () {
        return this.subscribe('bookCategory', this.params.category),
            this.subscribe('pdfs'),
            this.subscribe('categories');
    },

    data: {
        Books: Books.find({})
    },

    action: function () {
        this.render('library', Books.find());
    }
});