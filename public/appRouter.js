(function () {
    angular
        .module('appRouter', ['ngRoute'])
        .config(config);

        function config($routeProvider, $locationProvider) {

            $routeProvider

                // home page
                .when('/', {
                    templateUrl: 'views/pages/home.html',
                    controller: 'homeController',
                    controllerAs: 'home'
                })
                .when('/links', {
                    templateUrl: 'views/pages/links.html',
                    controller: 'linksController',
                    controllerAs: 'link'
                })
                .otherwise({
                    redirectTo: '/'
                });

            $locationProvider.html5Mode(true);

        }
}());
