var route = angular.module('BasicRoute', ['ui.router'])

route.config(function ($stateProvider, $urlRouterProvider) {

    var home = {
        name: 'home',
        url: '/home',
        component: 'home',
        title: 'Home'
    };

    var dashboard = {
        name: 'dashboard',
        url: '/dashboard',
        component: 'dashboard',
        title: 'Dashboard'
    };

    var report = {
        name: 'report',
        url: '/report:reportId',
        component: 'report',
        title: 'Report'
    };

    $stateProvider.state(home);
    $stateProvider.state(dashboard);
    $stateProvider.state(report);
    $urlRouterProvider.otherwise('/home');
});