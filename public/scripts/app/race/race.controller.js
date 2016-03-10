/**
 * Created by ldowell on 3/8/16.
 */
(function() {
    'use strict';
    angular.module('eltr')
        .controller('RaceController', ['$scope', 'Race', 'socket', function($scope, Race, socket) {

            $scope.participants = undefined;

            socket.on(socket.EVENTS.CREATE_RACE, function(raceData) {
                if(raceData.err) {
                    // TODO Err stuff
                    console.log(raceData.err);
                }

                if(raceData) {
                    console.log("RECEIVED RACE DATA " , raceData);
                    Race.participants = raceData.participants;
                    Race.subject = raceData.subject;
                    Race.isActive = true;
                    updateParticipants();
                }
            });

            function updateParticipants() {
                $scope.participants = Race.participants;
            }
        }]);

})();