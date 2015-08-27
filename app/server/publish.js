/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */


Meteor.publish('books', function (id) {

  if(!id)return Books.find();
  return Books.find({_id:id});
});