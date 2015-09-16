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
    action: 'library',
    where: 'client'
});
Router.route('book/:id', {
    name: 'viewBook',
    controller: 'DashboardController',
    action: 'viewBook',
    where: 'client'
});
Router.route('addbook', {
    name: 'addbook',
    controller: 'DashboardController',
    action: 'addbook',
    where: 'client'
});


Router.plugin('ensureSignedIn', {
    only: ['dashboard']
});