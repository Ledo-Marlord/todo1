(function (){
    angular
        .module('mainController', [])
        .controller('mainController', mainController);

        function mainController($scope) {

            this.message = 'Angular Todo';

            $scope.navbar = {brand: 'Todo App',
                             page1: 'Home',
                             page2: 'Test'};

            //$scope.navlinks = {link: 'http://www.github.com/Ledo-Marlord/todo1/', title: 'GitHub'}
            //TODO: Include the other links in this format as an array and deliver them to the navbar directive as a repeat
        }
}());