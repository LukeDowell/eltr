/**
 * Created by ldowell on 3/9/16.
 */
(function() {
    'use strict';

    angular.module('eltr')
        .directive('eltrRace', ['$interval', 'Race', function($interval, Race) {
            'use strict';

            return {
                restrict: "EA",
                replace: "true",
                scope: {
                },
                templateUrl: 'scripts/components/race/directive/race.html',
                link: function($scope, element, attributes) {
                    var subjectTextArea = element.find('textarea'); // TODO do these selectors need to be more specific?
                    var raceInput = element.find('input');

                    /**
                     * Current word index refers to which word the application
                     * expects the racer to type next. Spaces count as their own 'word'.
                     *
                     * If the subject's content is 'Hello type racer!' and the expected word is 'type', the
                     * index would be 2 because of the 'Hello' word (0) and the space character (1).
                     *
                     * @type {number}
                     */
                    var currentWordIndex = 0;

                    /**
                     * Splits up the subject's content into an array containing
                     * each individual word, including spaces.
                     *
                     * @type {Array}
                     */
                    var contentWords;
                    Race.subject()
                        .then(function(subject) {
                            subjectTextArea.val(subject.content);
                            contentWords = subject.content.split(/(\s+)/)
                        });


                    raceInput.on('keydown', function($event) {
                        if(Race.isActive) {

                            // Grab the current word
                            // Calculate how far into the word we are, or what the next expected character is

                            console.log($event);
                        }
                    });
                }
            }
        }]);
})();