/**
 * Created by ldowell on 3/7/16.
 */
(function() {
    angular.module('eltr')
        .controller('MainController', ['$scope', 'IO', function($scope, IO) {
            console.log(IO);
        }]);
})();