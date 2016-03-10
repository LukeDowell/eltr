/**
 * Created by ldowell on 3/9/16.
 */
(function() {
    'use strict';

    angular.module('eltr')
        .directive('raceParticipants', ['Race', 'socket', function(Race, socket) {

            return {
                restrict: "EA",
                replace: "true",
                scope: {},
                templateUrl: 'scripts/components/race/directive/race-participants.html',
                link: function(scope, element, attributes) {
                    console.log("RACE PARTICIPANTS " , scope, element, attributes);

                    // Register keydown event on the element
                    element.on
                    socket.on(socket.EVENTS.RACE_UPDATE, function(data) {
                        console.log("RACE UPDATE ", data);
                        $scope.participants = data;
                    });
                }
            }
        }]);
})();