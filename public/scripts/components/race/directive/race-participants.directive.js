/**
 * Created by ldowell on 3/9/16.
 */
(function() {
    'use strict';

    angular.module('eltr')
        .directive('raceParticipants', ['$interval', 'Race', function($interval, Race) {

            return {
                restrict: "EA",
                replace: "true",
                scope: {
                },
                templateUrl: 'scripts/components/race/directive/race-participants.html',
                link: function(scope, element, attributes) {

                    var intervalTask = $interval(function() {
                        scope.participants = Race.participants;
                    }, 500);

                    scope.$on('$destroy', function() {
                        // Clean up
                        $interval.cancel(intervalTask);
                        intervalTask = undefined;
                        console.log("Cleanup complete")
                    });

                }
            }
        }]);
})();