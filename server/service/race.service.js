/**
 * Created by ldowell on 3/9/16.
 */
'use strict';
var Race = require('../model/race');
var Subject = require('../model/subject');

var io = require('socket.io');
var Events = require('../socket/socket-events');

var instance = null;

/**
 *
 * @constructor
 */
var RaceService = function() {

    /**
     * An array of all currently active races
     * @type {Array}
     */
    this.activeRaces = [];

    this.init();
};

RaceService.prototype = {

    /**
     *
     */
    init: function() {

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
        //race.participants.push(socket.id); // TODO Change to user reference
        race.participants.push({
            // Example Participant
            'name': 'Sweet JP asdfasdf',
            'wpm': 200, // Words per minute
            'percentComplete': 75, // The last known percentage of completion
            'place': 1 // Whatever place this participant got in the race, if finished
        });

        Subject.random(function(randomSubject) {
            race.subject = randomSubject;
            callback(null, race); //TODO err
        });
    }
};

/**
 * Singleton
 * @returns {*}
 */
function getInstance() {
    if(instance === null) {
        instance = new RaceService();
    }
    return instance;
}
module.exports = getInstance();