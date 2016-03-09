'use strict';

var Events = require('./socket-events');
var RaceService = require('../service/RaceService');

/**
 * Creates a socket.io connection handler. Takes the IO
 * api as a parameter
 *
 * @param socket
 * @constructor
 */
var SocketHandler = function(socket) {

    /**
     * The socket this handler is attached to
     */
    this.socket = socket;

    this.init();
};

SocketHandler.prototype = {

    /**
     *
     */
    init: function() {
        this.socket.on('connection', this.onConnect);
        this.socket.on(Events.CREATE_RACE, this.onCreateRace);
        this.socket.on(Events.JOIN_RACE, this.onJoinRace);
        this.socket.on(Events.LEAVE_RACE, this.onLeaveRace);

        console.log("Socket Handler Initialized for socket: " + this.socket.id);
    },

    /**
     *
     * @param socket
     */
    onConnect: function(data) {

    },

    /**
     *
     * @param socket
     */
    onLeaveRace: function(data) {

    },

    /**
     *
     * @param socket
     */
    onJoinRace: function(data) {

    },

    /**
     *
     * @param socket
     */
    onCreateRace: function(data, callback) {
        RaceService.createRace(this.socket, data);
        callback("ALL GOOD");
    }

};


module.exports = SocketHandler;