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
                .when('/test', {
                    templateUrl: 'views/pages/test.html',
                    controller: 'testController',
                    controllerAs: 'test'
                })
                .otherwise({
                    redirectTo: '/'
                });

            $locationProvider.html5Mode(true);

        }
}());
