(function (){
    angular
        .module('userService', [])
        .factory('user', user);

        function user ($http) {
            // call to get THE user
            var get = function () {
                return $http.get('/api/user')
                    .then(function (res) {
                        return res.data.message;
                    });

            };

            return {
                getUser: get
            };
        }
}());