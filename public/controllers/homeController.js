(function (){
    angular
        .module('homeController', ['userService'])
        .controller('homeController', function($scope, User) {

            User.all()
                .success(function(data){
                    $scope.message = data.message;
                });


        });
}());