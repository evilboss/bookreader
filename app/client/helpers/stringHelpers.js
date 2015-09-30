Template.registerHelper('truncate', function (string, length) {
    var cleanString = _(string).stripTags();
    return _(cleanString).truncate(length);
});
Template.registerHelper('isAdmin', function (string, length) {
    return Roles.userIsInRole(Meteor.userId(), 'admin')  // => true
});

Template.registerHelper('isOnline', function () {
    return Meteor.users.find({"status.online": true});
});