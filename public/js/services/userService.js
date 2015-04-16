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

            //
            //create : function(nerdData) {
            //    return $http.post('/api/nerds', nerdData);
            //},
            //
            //delete : function(id) {
            //    return $http.delete('/api/nerds/' + id);
            //}
            return {
                getUser: get
            };
        }
}());