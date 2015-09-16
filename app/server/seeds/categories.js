Meteor.startup(function () {

    Factory.define('category', Category, {
        name: function () {
            return Fake.word();
        }

    });

    if (Category.find({}).count() === 0) {

        _(10).times(function (n) {
            Factory.create('category');
        });

    }

})
;
