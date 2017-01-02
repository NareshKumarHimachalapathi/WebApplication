(function () {
    'use strict';

    basicApp.component('home', {
        bindings: [],
        templateUrl: 'views/home/home.html',
        controller: homeController,
        controllerAs: 'vm'
    });

    homeController.$inject = ['$scope'];

    function homeController($scope) {
        var vm = this;
        vm.pageName = "Home Page";
    }
})();