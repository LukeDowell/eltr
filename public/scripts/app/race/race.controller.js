/**
 * Created by ldowell on 3/8/16.
 */
(function() {
    'use strict';
    angular.module('eltr')
        .controller('RaceController', ['$scope', 'Race', 'socket', function($scope, Race, socket) {

            $scope.race = {

                subject: {

                    // Example Subject
                    'content': 'asdf',
                    'origin': 'asdfasdf'

                },

                participants: [
                    {
                        // Example Participant
                        'name': 'Sweet JP',
                        'wpm': 200, // Words per minute
                        'percentComplete': 75, // The last known percentage of completion
                        'place': 1 // Whatever place this participant got in the race, if finished
                    }
                ]
            };

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

                    $scope.race = raceData;

                    $scope.$apply(function() {
                        // Feels weird to copy all the data to the service then ignore it
                        $scope.race = raceData;
                    });
                }
            });
        }]);

})();