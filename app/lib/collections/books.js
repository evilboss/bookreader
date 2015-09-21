Books = new Mongo.Collection('books');
Books.attachSchema(new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 200
    },
    author: {
        type: String,
        label: "Author"
    },
    summary: {
        type: String,
        label: "Brief summary",
        optional: true,
        max: 1000
    },
    category: {
        type: String,
        optional: false,
        autoform: {
            afFieldInput: {
                options: function () {
                    var categories = Category.find().fetch();
                    var options = [];
                    for (categs in categories) {
                        var option = {label: categories[categs].name, value: categories[categs].name};
                        options.push(option)
                    }
                    return options;
                }
            }
        }
    },
    file:{
        type:String,
        optional: true
    }
}));



if (Meteor.isServer) {
    Books.allow({
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

    Books.deny({
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
