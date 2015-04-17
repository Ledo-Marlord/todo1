(function (){
    angular
        .module('userService', [])
        .factory('User', user);

        function user ($http) {

            // Create Object
            var user = {};

            // call to get THE user
            user.all = function () {
                return $http.get('/api/user');
            };

            return user;
        }
}());