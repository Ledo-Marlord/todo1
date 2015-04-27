(function () {
    angular
        .module('todoNavbar', ['ngMaterial'])
        .directive('topNavbar', navbar);

    function navbar() {
        var directive = {
            scope: {},
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

    navController.$inject = ['$location'];

    function navController($location) {
        var vm = this;

        vm.brand = '2Due';

        vm.navbar = {linkpage1: '/', page1: 'Home',
                     linkpage2: '/test', page2: 'Test'};

        vm.navlinks = {link1: 'http://www.github.com/Ledo-Marlord/todo1/', title1: 'GitHub',
                       link2: 'http://www.groupme.com',                    title2: 'GroupMe',
                       link3: 'https://trello.com/b/a35430rn/todo-app',    title3: 'Trello'};

        vm.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    }

}());