'use strict';

var Events = require('./socket-events');
var RaceService = require('../service/race.service');

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
        this.socket.on('connection', this.onConnect.bind(this));
        this.socket.on('error', this.onError.bind(this));
        this.socket.on(Events.CREATE_RACE, this.onCreateRace.bind(this));
        this.socket.on(Events.JOIN_RACE, this.onJoinRace.bind(this));
        this.socket.on(Events.LEAVE_RACE, this.onLeaveRace.bind(this));

        console.log("Socket Handler Initialized for socket: " + this.socket.id);
    },

    /**
     *
     * @param data
     */
    onConnect: function(data) {
        // What to do here? Register connection somewhere?
        console.log("onConnect - " , this.socket.id);
    },

    /**
     *
     * @param data
     */
    onLeaveRace: function(data) {
        console.log('onLeaveRace - ', this.socket.id);
    },

    /**
     *
     * @param data
     */
    onJoinRace: function(data) {
        console.log('onJoinRace - ', this.socket.id);
    },

    /**
     *
     * @param data
     *
     * @param callback
     */
    onCreateRace: function(data, callback) {
        console.log('onCreateRace - ' , this.socket.id);
        try {
            RaceService.createRace(this.socket, data);
        } catch(e) {
            callback(e);
        }
        callback('success');
    },

    /**
     *
     * @param error
     */
    onError: function(error) {
        console.log("SOCKET ERROR");
        console.log(this.socket.id);
        console.log(error);
    }

};


module.exports = SocketHandler;