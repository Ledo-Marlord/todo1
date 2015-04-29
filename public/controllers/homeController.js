(function (){
    angular
        .module('homeController', ['userService', 'ngAnimate', 'toaster', 'ngMaterial'])
        .controller('homeController', homeController);

        function homeController($scope, User, toaster, $window) {
            $scope.jumbotronMsg = "To Do App";

            $scope.createNewUser = function (userName, userId, userPhone) {
                User.post(userName, userId, userPhone).then(postSuccess, onError);
            };
            var postSuccess = function () {
                toaster.pop('warning', 'Page Response', 'User Created Successfully!', 2000);
                $scope.showAdd = false;
                $scope.getUserResponse();
            };
            var onError = function (err) {
                toaster.pop('warning', 'Page Response', 'Error', 2000);
                console.log(err);
            };

            $scope.getUserResponse = function () {
                User.get()
                    .success(function(data){
                        $scope.name = data[data.length-1].name;
                        $scope.userID = data[data.length-1].userID;
                        $scope.phone = data[data.length-1].phone;

                        toaster.pop('success', 'DB Response', 'Data Returned Successfully', 2000);
                    });
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