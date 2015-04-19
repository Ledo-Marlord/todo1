(function () {
    angular
        .module('todoNavbar', [])
        .directive('topNavbar', navbar);

    function navbar() {
        var directive = {
            scope: false,
            restrict: 'E',
            replace: true,
            templateUrl: 'views/directives/navbarTemplate.html',
            transclude: true
        };

        return directive;
    }
}());