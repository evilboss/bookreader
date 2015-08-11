Router.configure({
    layoutTemplate: 'MasterLayout',
    loadingTemplate: 'Loading',
    notFoundTemplate: 'NotFound'
});

Router.route('/', {
    name: 'home',
    controller: 'HomeController',
    action: 'action',
    where: 'client'
});

Router.route('/library', {
    name: 'library',
    controller: 'DashboardController',
    where: 'client'
});

Router.plugin('ensureSignedIn', {
    only: ['dashboard']
});