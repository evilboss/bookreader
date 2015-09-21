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

    },
    onError: function () {
        return function (error) {
            alert("BOO!");
            console.log(error);
        };
    },
    beforeRemove: function () {
        return function (collection, id) {
            var doc = collection.findOne(id);
            if (confirm('Are you sure you want to delete "' + doc.name + '"?')) {
                this.remove();
            }
        };
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
