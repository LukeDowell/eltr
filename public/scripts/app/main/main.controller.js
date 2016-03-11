/**
 * Created by ldowell on 3/7/16.
 */
(function() {
    angular.module('eltr')
        .controller('MainController', ['$scope', '$state', 'Race', 'socket', function($scope, $state, Race, socket) {

            /**
             * Simple object that has a user-selected 'name' property
             * @type {undefined}
             */
            $scope.user = undefined;

            /**
             *
             */
            $scope.beginButtonClicked = function(user) {
                Race.createRace(function(data) {
                    console.log("Race Created");
                    Race.updateRaceData();
                    $state.go('race');
                });
            };



        }]);
})();