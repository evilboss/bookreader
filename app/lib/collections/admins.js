Admins = new Mongo.Collection('admins');
Admins.attachSchema(new SimpleSchema({
    "email": {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        unique: true
    }
}));


if (Meteor.isServer) {
    Admins.allow({
        insert: function (userId, doc) {
            return true;
        },

        update: function (userId, doc, fieldNames, modifier) {
            return true;
        },

        remove: function (userId, doc) {
            return true;
        }
    });

    Admins.deny({
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
