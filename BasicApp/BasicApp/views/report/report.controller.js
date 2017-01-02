(function () {
    'use strict';

    basicApp.component('report', {
        bindings: [],
        templateUrl: 'views/report/report.html',
        controller: reportController,
        controllerAs: 'vm'
    });

    reportController.$inject = ['$scope'];

    function reportController($scope) {
        var vm = this;
        vm.pageName = "Report Page";
    }
})();