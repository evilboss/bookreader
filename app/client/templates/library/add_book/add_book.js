/*****************************************************************************/
/* AddBook: Event Handlers */
/*****************************************************************************/
Template.AddBook.events({});

/*****************************************************************************/
/* AddBook: Helpers */
/*****************************************************************************/
Template.AddBook.helpers({});

/*****************************************************************************/
/* AddBook: Lifecycle Hooks */
/*****************************************************************************/
Template.AddBook.created = function () {
};

Template.AddBook.rendered = function () {
    AutoForm.addHooks(
        ["insertBookForm"],
        {
            before: {
                method: CfsAutoForm.Hooks.beforeInsert
            },
            after: {
                method: CfsAutoForm.Hooks.afterInsert
            }
        }
    );
};

Template.AddBook.destroyed = function () {
};


