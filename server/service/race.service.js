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
     * Creates a race with the provided socket being its owner
     *
     * @param socket
     *      The socket that will 'own' this race. Ownership means practically
     *      nothing, as if the owner leaves and others are still in the race
     *      it will continue to run.
     */
    createRace: function(socket) {
        console.log("Creating Race - Owner : " , socket.id);

        var race = new Race();
        race.subject = Subject.random();
        race.participants.push(socket.id); // TODO Change to user reference
        socket.join(race.id); // Join a room with the same id as the race, which is a random uuid

        io.to(race.id).emit(Events.CREATE_RACE, {});
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