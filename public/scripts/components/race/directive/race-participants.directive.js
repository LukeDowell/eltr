/**
 * Created by ldowell on 3/9/16.
 */
/**
 * Created by ldowell on 3/9/16.
 */
angular.module('eltr')
    .directive('race-participants', ['Race', function(Race) {
        'use strict';

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