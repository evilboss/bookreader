AppController = RouteController.extend({
  layoutTemplate: 'MasterLayout'
});

AppController.events({
  'click [data-action=logout]' : function() {
    AccountsTemplates.logout();
  }
});
