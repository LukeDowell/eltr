/**
 * Created by ldowell on 3/9/16.
 */
(function() {
    'use strict';

    angular.module('eltr')
        .directive('raceSubject', ['Race', 'socket', function(Race, socket) {
            'use strict';

            return {
                restrict: "EA",
                replace: "true",
                scope: {},
                templateUrl: 'scripts/components/race/directive/race-subject.html',
                link: function(scope, element, attributes) {
                    console.log("RACE SUBJECT" , scope, element, attributes);

                    socket.on(socket.EVENTS.RA)
                }
            }
        }]);
})();