/**
 * Created by ldowell on 3/9/16.
 */
(function() {
    'use strict';

    angular.module('eltr')
        .factory('Race', ['socket', function(socket) {
            var instance = null;

            /**
             *
             * @constructor
             */
            var Race = function() {

                /**
                 *
                 * @type {Array}
                 */
                this.participants = [];

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
                    this.setupHandlers();
                },

                /**
                 *
                 * @returns {Race}
                 */
                setupHandlers: function() {
                    return this;
                },

                /**
                 *
                 */
                createRace: function(callback) {
                    socket.emit(socket.EVENTS.CREATE_RACE, "HELO", callback);
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