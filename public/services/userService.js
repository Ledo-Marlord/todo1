(function (){
    angular
        .module('userService', [])
        .factory('User', user);

        function user ($http) {

            // Create Object
            var user = {};

            // call to get THE user
            user.get = function () {
                return $http.get('/api/user');
            };

            user.post = function () {
                $http.post('/api/user/save', {name:'Number 1 user!', userID: Math.floor((Math.random() * 100) + 1), phone: 0}).
                    success(function(data, status, headers, config) {
                        console.log(data, status, headers, config);
                    }).
                    error(function(data, status, headers, config) {
                        console.log('user POST error');
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                    });
            };

            return user;
        }
}());