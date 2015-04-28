(function () {
    angular
        .module('testController', [])
        .controller('testController', function() {
            var vm = this;

            vm.message = 'test page message';

            vm.navlinks = {link1: 'http://www.github.com/Ledo-Marlord/todo1/', title1: 'GitHub',
                           link2: 'http://www.groupme.com',                    title2: 'GroupMe',
                           link3: 'https://trello.com/b/a35430rn/todo-app',    title3: 'Trello'};

        });
}());

