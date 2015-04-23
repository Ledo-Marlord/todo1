(function (){
    angular
        .module('homeController', ['userService', 'ngAnimate', 'toaster'])
        .controller('homeController', homeController);

        function homeController($scope, User, $timeout, toaster, $window) {
            $scope.getUserResponse = function () {
                User.all()
                    .success(function(data){
                        $scope.name = data.name;
                        $scope.userID = data.userID;
                        $scope.phone = data.phone;
                        toaster.success({title: "DB Response", body: "Data Returned Successfully"});
                    });
            };
            $scope.postUserInfo = function () {
                toaster.warning({title: "Page Response", body: "Still need to complete POST method"});
            };
            $scope.linkToToast = function () {
                toaster.pop('note', "Link to Toaster Github", 'https://github.com/jirikavi/AngularJS-Toaster', 5000, 'trustedHtml', function(toaster) {
                    var match = toaster.body.match(/http[s]?:\/\/[^\s]+/);
                    if (match) $window.open(match[0]);
                    return true;
                });
            };
            $scope.clearData = function () {
                $scope.name = "";
                $scope.userID = "";
                $scope.phone = "";
                toaster.error({title: "Page Response", body: "User data has been removed"});
            }
        }
}());