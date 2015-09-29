/*****************************************************************************/
/* Admins: Event Handlers */
/*****************************************************************************/
Template.Admins.events({
});

/*****************************************************************************/
/* Admins: Helpers */
/*****************************************************************************/
Template.Admins.helpers({
    beforeRemove: function () {
        return function (collection, id) {
            var doc = collection.findOne(id);
            if (confirm('Are you sure you want to delete "' + doc.email + '"?')) {
                this.remove();
            }
        };
    }
});

/*****************************************************************************/
/* Admins: Lifecycle Hooks */
/*****************************************************************************/
Template.Admins.created = function () {
};

Template.Admins.rendered = function () {
};

Template.Admins.destroyed = function () {
};
