(function (){
    angular
        .module('mainController', [])
        .controller('mainController', mainController);

        function mainController($scope) {

            this.message = 'Angular Todo';

            //TODO: Include the other links in this format as an array and deliver them to the navbar directive as a repeat
        }
}());