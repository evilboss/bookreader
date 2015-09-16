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
    file: {
        type: String,
        autoform: {
            afFieldInput: {
                type: 'fileUpload',
                collection: 'PdfFile',

            }
        },
        label: 'upload'
    }
}));

PdfFile = new FS.Collection("pdfFile", {
    stores: [new FS.Store.GridFS("pdf", {})]
});

PdfFile.allow({
    insert: function (userId, doc) {
        return userId;
    },
    download: function () {
        return true;
    }
});
Books.helpers({
    bookFile: function () {
        return '/cfs/files/pdf/'+this.file;
    }
});

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
