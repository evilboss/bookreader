/*****************************************************************************/
/* ListCategoriesItem: Event Handlers */
/*****************************************************************************/
Template.ListCategoriesItem.events({});

/*****************************************************************************/
/* ListCategoriesItem: Helpers */
/*****************************************************************************/
Template.ListCategoriesItem.helpers({
    subitems: function () {

        return Subcategories.find({category: this.name}).fetch();

    }
});

/*****************************************************************************/
/* ListCategoriesItem: Lifecycle Hooks */
/*****************************************************************************/
Template.ListCategoriesItem.created = function () {
};

Template.ListCategoriesItem.rendered = function () {
};

Template.ListCategoriesItem.destroyed = function () {
};
