/**
 * Created by ldowell on 3/9/16.
 */
(function() {
    'use strict';

    angular.module('eltr')
        .factory('Race', ['$rootScope', 'socket', function($rootScope, socket) {
            var instance = null;

            /**
             *
             * @constructor
             */
            var Race = function() {

                /**
                 * Whether or not the local user is currently engaged in a
                 * typing race
                 * @type {boolean}
                 */
                this.isActive = false;

                /**
                 *
                 * @type {Array}
                 */
                this.participants = [
                    {
                        // Example Participant
                        'name': 'Sweet JP',
                        'wpm': 200, // Words per minute
                        'percentComplete': 75, // The last known percentage of completion
                        'place': 1 // Whatever place this participant got in the race, if finished
                    }
                ];

                /**
                 *
                 * @type {undefined}
                 */
                this.subject = undefined;

                this.init();
            };

            Race.prototype = {

                /**
                 *
                 */
                init: function() {
                    socket.on(socket.EVENTS.CREATE_RACE, this.onRaceCreated.bind(this));
                },

                /**
                 *
                 */
                createRace: function(callback) {
                    socket.emit(socket.EVENTS.CREATE_RACE, "HELO", callback);
                },


                ///////////////////
                // RECEIVE EVENTS
                ///////////////////

                /**
                 *
                 * @param raceData
                 */
                onRaceCreated: function(raceData) {
                    this.subject = raceData.subject;
                    this.participants = raceData.participants;
                }


            };

            function getInstance() {
                if(instance === null) {
                    instance = new Race();
                }
                return instance;
            }
            return getInstance();
        }]);
})();