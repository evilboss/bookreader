Meteor.startup(function () {

    Factory.define('category', Category, {
        name: function () {
            return Fake.word();
        }

    });
    if (Category.find({}).count() === 0) {
        var SeedCategories = ['Programming','Filipino','Porn','English']
        for(var categs in SeedCategories){
            var seedcategory = {name:SeedCategories[categs]};
            Category.insert(seedcategory);
        }
    }
});
