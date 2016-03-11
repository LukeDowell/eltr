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

                    /**
                     * Gets the next expected character. Returns null
                     * if the word has been completed
                     * @returns {*}
                     */
                    function getExpectedCharacter() {
                        var currentWord = contentWords[currentWordIndex];
                        var currentInput = raceInput.val();

                        for(var i = 0; i < currentWord.length; i++ ) {
                            if(currentInput.charAt(i) != currentWord.charAt(i)) {
                                return currentWord.charAt(i);
                            }
                        }
                        return null;
                    }

                    // Grab our needed data
                    Race.subject()
                        .then(function(subject) {

                            //todo sometimes this is null, why?
                            subjectTextArea.val(subject.content);

                            // The space character is used as a delimiter and is included in the returned array
                            contentWords = subject.content.split(/(\s+)/)
                        });




                    raceInput.on('keydown', function($event) {
                        var isShiftPressed = $event.shiftKey; // String.fromCharCode doesn't care about capitalization
                        var newCharacter = String.fromCharCode($event.which);

                        var expectedCharacter = getExpectedCharacter();
                        if(expectedCharacter) {

                            if(newCharacter == expectedCharacter) {
                                // Progress in the race
                                console.log("WOOP");
                            } else {
                                // ERROR
                                console.log("ERROR");
                            }
                        } else {
                            // Word is complete

                            currentWordIndex++;
                            raceInput.val('');
                        }


                    });
                }
            }
        }]);
})();