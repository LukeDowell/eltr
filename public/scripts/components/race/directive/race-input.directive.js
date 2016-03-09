/**
 * Created by ldowell on 3/9/16.
 */
angular.module('eltr')
    .directive('race-input', ['Race', function(Race) {
        'use strict';

        return {
            restrict: "EA",
            replace: "true",
            scope: {},
            templateUrl: '/scripts/components/race/directive/race-input.html',
            link: function(scope, element, attributes) {
                console.log("RACE INPUT " , scope, element, attributes);
            }
        }
    }]);