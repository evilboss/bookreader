var CategoriesSchema = new SimpleSchema({
    name: {
        type: String,
        label: 'Name',
        unique: true
    }
});

Category = new Mongo.Collection('categories');
Category.attachSchema(CategoriesSchema);


if (Meteor.isServer) {
    Category.allow({
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

    Category.deny({
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
