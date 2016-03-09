/**
 * Created by ldowell on 3/9/16.
 */
'use strict';

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