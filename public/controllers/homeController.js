(function (){
    angular
        .module('homeController', ['userService', 'ngAnimate', 'toaster', 'ngMaterial'])
        .controller('homeController', homeController);

        function homeController($scope, User, toaster, $window) {
            $scope.getUserResponse = function () {
                User.get()
                    .success(function(data){
                        console.log(data[0]);
                        $scope.name = data[0].name;
                        $scope.userID = data[0].userID;
                        $scope.phone = data[0].phone;
                        console.log(data);
                        toaster.pop('success', 'DB Response', 'Data Returned Successfully', 2000);
                    });
            };
            $scope.postUserInfo = function () {
                toaster.pop('warning', 'Page Response', 'Still need to complete POST method', 2000);
                User.post()
                    .success(function () {
                    console.log('home controller user post success');
                })
            };
            $scope.linkToToast = function () {
                toaster.pop('note', "Link to Toaster Github", 'https://github.com/jirikavi/AngularJS-Toaster', 2500, 'trustedHtml', function(toaster) {
                    var match = toaster.body.match(/http[s]?:\/\/[^\s]+/);
                    if (match) $window.open(match[0]);
                    return true;
                });
            };
            $scope.clearData = function () {
                $scope.name = "";
                $scope.userID = "";
                $scope.phone = "";
                toaster.pop('error', 'Page Response', 'User Data has been removed', 2000);
            };

        }
}());