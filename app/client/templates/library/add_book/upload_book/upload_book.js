/*****************************************************************************/
/* UploadBook: Event Handlers */
/*****************************************************************************/
Template.UploadBook.events({
});

/*****************************************************************************/
/* UploadBook: Helpers */
/*****************************************************************************/
Template.UploadBook.helpers({
});

/*****************************************************************************/
/* UploadBook: Lifecycle Hooks */
/*****************************************************************************/
Template.UploadBook.created = function () {
};

Template.UploadBook.rendered = function () {
};

Template.UploadBook.destroyed = function () {
};
Uploads.after.insert(function (userId, doc) {
    Books.update({_id:Router.current().params.id},{$set:{file:doc.url}});
});
