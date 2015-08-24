DashboardController = AppController.extend({
  waitOn: function() {
    return this.subscribe('books');
  },
  data: {
    Books: Books.find({})
  },
  onAfterAction: function () {
    Meta.setTitle('Library');
  },
  library: function() {
    this.render('library');
  },
  addbook: function() {
    this.render('AddBook');
  }
});

DashboardController.events({

});
