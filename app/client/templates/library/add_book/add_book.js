/*****************************************************************************/
/* AddBook: Event Handlers */
/*****************************************************************************/
Template.AddBook.events({

});
/*****************************************************************************/
/* AddBook: Helpers */
/*****************************************************************************/
Template.AddBook.helpers({
    uploadFormData: function () {
        return {id: this._id}
    },
    specificFormData: function () {
        console.log({
            id: this._id,
            other: this.other,
            hard: 'Lolcats'
        });
        return {
            id: this._id,
            other: this.other,
            hard: 'Lolcats'
        }
    }
});
/*****************************************************************************/
/* AddBook: Lifecycle Hooks */
/*****************************************************************************/
Template.AddBook.created = function () {
};
Template.AddBook.rendered = function () {
};
Template.AddBook.destroyed = function () {
};


Books.after.insert(function (userId, doc) {
    Router.go('uploadbook', {id: doc._id});
});