/**
 * Created by ldowell on 3/9/16.
 */
(function() {
    'use strict';

    angular.module('eltr')
        .directive('raceInput', ['Race', function(Race) {

            return {
                restrict: "EA",
                replace: "true",
                scope: {},
                templateUrl: '/scripts/components/race/directive/race-input.html',
                link: function(scope, element, attributes) {
                    console.log("RACE INPUT " , scope, element, attributes);

                    // Register keydown event listener
                    element.find('input').on('keydown', function($event) {
                        console.log('KEYDOWN ' , $event);
                    });
                }
            }
        }]);
})();