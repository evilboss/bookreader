/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */

Meteor.publish('books', function (id) {
    if (!id) {
        return Books.find({})
    }
    return Books.find({_id: id});
});

Meteor.publish('pdfs', function (/* args */) {
  return PdfFile.find();
});

Meteor.publish('categories', function (/* args */) {
  return Category.find();
});