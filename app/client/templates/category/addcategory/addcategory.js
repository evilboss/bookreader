/*****************************************************************************/
/* Addsubcategory: Event Handlers */
/*****************************************************************************/

Meteor.startup(function () {
    var categoryhook = {
        onSuccess: function (formType, result) {
            toastr.success('Category has been added!', 'Add Category');
        }
    }
    AutoForm.hooks({
        CategoryForm: categoryhook
    });
});


Template.Addcategory.events({});

/*****************************************************************************/
/* Addsubcategory: Helpers */
/*****************************************************************************/
Template.Addcategory.helpers({});

/*****************************************************************************/
/* Addsubcategory: Lifecycle Hooks */
/*****************************************************************************/
Template.Addcategory.created = function () {
};

Template.Addcategory.rendered = function () {
    Session.set("pagingSkip", 0);
    Session.set("pagingLimit", 0);
};

Template.Addcategory.destroyed = function () {
};
