(function (){
    angular
        .module('homeController', [])
        .controller('homeController', function($scope, user) {



            var setMessage = function (data) {
                $scope.message = data;
            };

            var error = function (err) {
                console.log(err);
            };

            user.getUser().then(setMessage, error);


        });
}());