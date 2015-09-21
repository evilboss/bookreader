Uploads = new Mongo.Collection('uploads');


if (Meteor.isServer) {

  Uploads.allow({
    insert: function (userId, doc) {
      return true;
    },
    update: function (userId, doc, fields, modifier) {
      return true
    }
  });

  Uploads.deny({
    insert: function (userId, doc) {
      return false;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return false;
    },

    remove: function (userId, doc) {
      return false;
    }
  });
}
