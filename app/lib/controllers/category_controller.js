CategoryController = AppController.extend({
  waitOn: function () {
    return this.subscribe('bookCategory', this.params.category),
        this.subscribe('pdfs'),
        this.subscribe('categories');
  },

  data: function () {
    return Books.find({category: this.params.category});
  },

  action: function () {
    this.render('library', Books.find({category: this.params.category}));
  }
});
