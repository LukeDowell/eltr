/**
 * Created by ldowell on 3/9/16.
 */
(function() {
    'use strict';

    angular.module('eltr')
        .directive('raceParticipants', ['Race', function(Race) {

            return {
                restrict: "EA",
                replace: "true",
                scope: {},
                templateUrl: 'scripts/components/race/directive/race-participants.html',
                link: function(scope, element, attributes) {
                    console.log("RACE PARTICIPANTS " , scope, element, attributes);
                }
            }
        }]);
})();