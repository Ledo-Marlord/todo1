(function (){
    angular
        .module('homeController', ['userService', 'ngAnimate', 'toaster'])
        .controller('homeController', homeController);

        function homeController($scope, User, $timeout, toaster) {
            $scope.getUserResponse = function () {
                User.all()
                    .success(function(data){
                        toaster.success({title: "A Toast!", body: data.message});
                    });
            };
        }
}());