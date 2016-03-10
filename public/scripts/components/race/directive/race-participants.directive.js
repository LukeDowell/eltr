/**
 * Created by ldowell on 3/9/16.
 */
(function() {
    'use strict';

    angular.module('eltr')
        .directive('eltrRaceParticipants', ['$interval', 'Race', function($interval, Race) {

            return {
                restrict: "EA",
                replace: "true",
                scope: {

                },
                templateUrl: 'scripts/components/race/directive/race-participants.html',
                link: function(scope, element, attributes) {


                }
            }
        }]);
})();