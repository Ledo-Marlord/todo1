(function (){
    angular
        .module('homeController', ['userService', 'ngAnimate', 'toaster'])
        .controller('homeController', homeController);

        function homeController($scope, User, $timeout, toaster, $window) {
            $scope.getUserResponse = function () {
                User.all()
                    .success(function(data){
                        toaster.pop('warning', "Link to Toaster Github", 'https://github.com/jirikavi/AngularJS-Toaster', 5000, 'trustedHtml', function(toaster) {
                            var match = toaster.body.match(/http[s]?:\/\/[^\s]+/);
                            if (match) $window.open(match[0]);
                            return true;
                        });
                        toaster.success({title: "A Toast!", body: data.message});
                        $scope.name = data.name;
                        $scope.userID = data.userID;
                        $scope.phone = data.phone;
                    });
            };
            $scope.postUserInfo = function () {

            }
        }
}());