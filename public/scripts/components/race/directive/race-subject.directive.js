/**
 * Created by ldowell on 3/9/16.
 */
(function() {
    'use strict';

    angular.module('eltr')
        .directive('raceSubject', ['$interval', 'Race', function($interval, Race) {
            'use strict';

            return {
                restrict: "EA",
                replace: "true",
                scope: {
                },
                templateUrl: 'scripts/components/race/directive/race-subject.html',
                link: function(scope, element, attributes) {

                    var intervalTask = $interval(function() {
                        scope.subject = Race.subject;
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