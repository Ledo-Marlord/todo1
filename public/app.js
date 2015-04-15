(function(){
    angular
        .module('todoApp', ['ngResource', 'ngRoute', 'mainController'])
        .config(config);

    function config($routeProvider, $locationProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'views/pages/home.html',
                controller: 'mainController',
                controllerAs: 'main'
            });
        $locationProvider.html5Mode(true);
    }
}());
