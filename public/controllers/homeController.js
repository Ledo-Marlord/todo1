(function (){
    angular
        .module('homeController', ['userService'])
        .controller('homeController', homeController);

        function homeController($scope, User, $timeout) {
            $scope.getUserResponse = function () {
                User.all()
                    .success(function(data){
                        $scope.buttonTest = data.message;

                        $timeout(returnBtnText, 1500);
                    });
            };

            var returnBtnText = function() {
                $scope.buttonTest = "Press Me!"
            }
        }
}());