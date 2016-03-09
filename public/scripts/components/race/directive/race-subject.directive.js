/**
 * Created by ldowell on 3/9/16.
 */
/**
 * Created by ldowell on 3/9/16.
 */
angular.module('eltr')
    .directive('race-subject', ['Race', function(Race) {
        'use strict';

        return {
            restrict: "EA",
            replace: "true",
            scope: {},
            templateUrl: 'scripts/components/race/directive/race-subject.html',
            link: function(scope, element, attributes) {
                console.log("RACE SUBJECT" , scope, element, attributes);
            }
        }
    }]);