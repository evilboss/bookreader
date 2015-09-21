/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */
Meteor.publish('books', function (/* args */) {
    return Books.find();
});
Meteor.publish('bookCategory', function (category) {
    return Books.find();
});

Meteor.publish('pdfs', function (/* args */) {
  return PdfFile.find();
});

Meteor.publish('categories', function (/* args */) {
  return Category.find();
});

Meteor.publish('admins', function (/* args */) {
  return Admins.find();
});