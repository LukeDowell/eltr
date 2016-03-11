/**
 * Created by ldowell on 3/9/16.
 */
'use strict';
var Race = require('../model/race');
var Subject = require('../model/subject');
var Channels = require('../socket/socket-channels');
var UserService = require('./user.service');
var io = require('socket.io');

// All the races that are currently running
var _activeRaces = {};

module.exports = {

    getRaceById: function(id) {
        return _activeRaces[id];
    },

    /**
     * Finds a race that has a socket with the
     * provided id
     * @param socketId
     */
    getRaceBySocketId: function(socketId) {

        for(var key in _activeRaces) {

            // Skip if the value is from prototype
            if(!_activeRaces.hasOwnProperty(key)) continue;

            var race = _activeRaces[key];
            for(var playerKey in race.participants) {

                if(!race.participants.hasOwnProperty(playerKey)) continue;

                var participant = race.participants[playerKey];
                if(participant.id == socketId) {
                    return race;
                }
            }
        }

        return null;
    },

    /**
     * Creates a race with the provided socket being its owner.
     *
     * @param socket
     *      The socket that will 'own' this race. Ownership means practically
     *      nothing, as if the owner leaves and others are still in the race
     *      it will continue to run.
     *
     * @param callback
     *      Function callback, receives an 'err' and a  'race' parameter representing the built race
     *      object
     * @return a Race object
     */
    createRace: function(socket, callback) {
        console.log("Creating Race - Owner : " , socket.id);

        var race = new Race();

        // Find the owner socket's user object and add to the race
        var ownerUser = UserService.getUserBySocket(socket);
        race.participants.push(ownerUser);

        // Grab a random subject from db
        Subject.findOneRandom(finalizeRace);

        function finalizeRace(err, subject) {
            if(err) {
                console.log('shit ', err);
                // TODO
            }

            if(subject) {
                race.subject = subject;

            } else {
                race.subject = {
                    content: 'Error fetching subject, please reload the page.',
                    origin: 'Poor programming'
                }
            }

            // Add to active races dictionary
            _activeRaces[race.id] = race;

            callback(race);
        }
    }
};