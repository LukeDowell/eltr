/**
 * Created by ldowell on 3/7/16.
 */
(function() {
    'use strict';

    angular.module('eltr')
        .factory('socket', [function() {
            var socket = window.io.connect();

            // Probably shouldn't do this
            // SEE server/socket/socket-events.js
            socket.EVENTS = {

                /**
                 *
                 */
                JOIN_RACE: 'joinrace',

                /**
                 *
                 */
                LEAVE_RACE: 'leaverace',

                /**
                 *
                 */
                CREATE_RACE: 'createrace',

                /**
                 *
                 */
                START_RACE: 'startrace',

                /**
                 *
                 */
                RACE_UPDATE: 'raceupdate'
            };

            return socket;
        }]);
})();