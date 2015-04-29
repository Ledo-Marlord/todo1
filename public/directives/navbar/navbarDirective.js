(function () {
    angular
        .module('todoNavbar', ['ngMaterial'])
        .directive('topNavbar', navbar);

    function navbar() {
        var directive = {

                // giving Scope a value of an empty json would give the directive "isolate scope"
                // Isolated scopes are best for something would be reused, so it's not a huge deal for us
                // to leave this one as is.
            restrict: 'E',
            replace: true,
            controller: navController,
            controllerAs: 'vm',
            templateUrl: 'directives/navbar/navbarTemplate.html',
            transclude: true
        };

        return directive;
    }

    navController.$inject = ['$location', '$scope'];

    function navController($location, $scope) {
        var vm = this;

        vm.brand = '2Due';

        vm.navbar = {linkpage1: '/', page1: 'Home',
                     linkpage2: '/links', page2: 'Links'};

        vm.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    }

}());