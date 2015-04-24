(function (){
    angular
        .module('mainController', ['ngMaterial'])
        .controller('mainController', mainController);

        function mainController($scope) {

            this.message = 'Angular Todo';

            $scope.helloWorld = function() {
                alert('Material Design is awesome!');
            }
        }
}());