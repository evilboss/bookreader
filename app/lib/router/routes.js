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
Router.route('addbook/uploadbook/:id', {
    name: 'uploadbook',
    controller: 'DashboardController',
    action: 'uploadbook',
    where: 'client'
});

Router.route('/category/new', {
    name: 'category.new',
    controller: 'DashboardController',
    action: 'newCategory',
    where: 'client'
});
Router.route('/categories', {
    name: 'categories',
    controller: 'DashboardController',
    action: 'categoryList',
    where: 'client'
});
Router.route('category/:category', {
    name: 'category.category',
    controller: 'CategoryController',
    action: 'action',
    where: 'client'

});
Router.route('/Admins', {
    name: 'Admin.list',
    controller: 'DashboardController',
    action: 'admin',
    where: 'client'

});
Router.route('/Admins/New', {
    name: 'Admin.Add',
    controller: 'DashboardController',
    action: 'adminAdd',
    where: 'client'

});
Router.plugin('ensureSignedIn', {
    only: ['dashboard','library','viewBook','addbook','category.new','categories','category.category','Admin.list','Admin.Add']
});