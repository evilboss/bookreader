/*****************************************************************************/
/* BookInfo: Event Handlers */
/*****************************************************************************/
Template.BookInfo.events({});

/*****************************************************************************/
/* BookInfo: Helpers */
/*****************************************************************************/
Template.BookInfo.helpers({
    'bookId':function(){
        return this.params.id;
    },
    book: function () {
        return Books.findOne({_id:Router.current().params.id});
    }
});

/*****************************************************************************/
/* BookInfo: Lifecycle Hooks */
/*****************************************************************************/
Template.BookInfo.created = function () {
};

Template.BookInfo.rendered = function () {


};

Template.BookInfo.destroyed = function () {
};
