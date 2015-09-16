/*****************************************************************************/
/* BookItem: Event Handlers */
/*****************************************************************************/
Template.BookItem.events({
});

/*****************************************************************************/
/* BookItem: Helpers */
/*****************************************************************************/
Template.BookItem.helpers({
    'book':function(){
        console.log('book');
        console.log(Books.findOne());
        return Books.findOne();
    }
});

/*****************************************************************************/
/* BookItem: Lifecycle Hooks */
/*****************************************************************************/
Template.BookItem.created = function () {
};

Template.BookItem.rendered = function () {
};

Template.BookItem.destroyed = function () {
};
