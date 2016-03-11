/**
 * Created by ldowell on 3/7/16.
 */
(function() {
    'use strict';

    angular.module('eltr')
        .factory('socket', [function() {
            var socket = window.io.connect();

            // Probably shouldn't do this
            // SEE server/socket/socket-channels.js
            socket.Channels = {

                /**
                 *
                 */
                JOIN_RACE: 'joinrace',

                /**
                 *
                 */
                LEAVE_RACE: 'leaverace',

                /**
                 * Sent from the client to the server when the user initiates the
                 * create race process.
                 *
                 * When the client is receiving this event, it contains initialization
                 * data for the race (the subject text, other participants if there are any,
                 * etc.)
                 */
                CREATE_RACE: 'createrace',

                /**
                 *
                 */
                START_RACE: 'startrace',

                /**
                 * When received, contains data regarding the current race. Examples are
                 * participant progress, words per minute, and whether or not they have
                 * completed the race.
                 */
                RACE_UPDATE: 'raceupdate'
            };

            return socket;
        }]);
})();