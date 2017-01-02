(function () {
    'use strict';

    basicApp.component('dashboard', {
        bindings: [],
        templateUrl: 'views/dashboard/dashboard.html',
        controller: dashboardController,
        controllerAs: 'vm'
    });

    dashboardController.$inject = ['$scope'];

    function dashboardController($scope) {
        var vm = this;
        vm.pageName = "Dashboard Page";
    }
})();