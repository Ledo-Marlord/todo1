(function (){
    angular
        .module('homeController', ['userService'])
        .controller('homeController', homeController);

        function homeController($scope, User) {
            $scope.getUserResponse = function () {
                User.all()
                    .success(function(data){
                        $scope.dicks = data.message;
                    });
            }
        }
}());