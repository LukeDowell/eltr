'use strict';

var Channels = require('./socket-channels');
var RaceService = require('../service/race.service');

/**
 * Creates a socket.io connection handler. Takes the IO
 * api as a parameter
 *
 * @param socket
 * @constructor
 */
var SocketHandler = function(socket, io) {

    /**
     * The socket this handler is attached to
     */
    this.socket = socket;

    /**
     * Reference to io, I feel like I shouldn't have to do this
     */
    this.io = io;

    this.init();
};

SocketHandler.prototype = {

    /**
     *
     */
    init: function() {
        this.socket.on('connection', this.onConnect.bind(this));
        this.socket.on('error', this.onError.bind(this));
        this.socket.on(Channels.CREATE_RACE, this.onCreateRace.bind(this));
        this.socket.on(Channels.JOIN_RACE, this.onJoinRace.bind(this));
        this.socket.on(Channels.LEAVE_RACE, this.onLeaveRace.bind(this));
        this.socket.on(Channels.RACE_UPDATE, this.onRaceUpdate.bind(this));

        console.log("Socket Handler Initialized for socket: " + this.socket.id);
    },

    /**
     * A request from the client to update their information about the race.
     * Sent back via a callback
     *
     * TODO figure out if that is 'efficient' to do with socket.io. Should we just
     * emit to the room and update everyone? That seems like a sideeffect
     *
     * @param data
     * @param callback
     */
    onRaceUpdate: function(data, callback) {
        var race = RaceService.getRaceBySocketId(this.socket.id);
        var response = {};
        if(race) {
            response.participants = race.participants;
            response.subject = race.subject;
        } else {
            response.err = 'A race cannot be found for the provided user!';
        }
        (callback || angular.noop)(response);
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
            RaceService.createRace(this.socket, function(race) {
                this.socket.join(race.id);

                this.io.sockets.in(race.id).emit(Channels.CREATE_RACE, race);
            }.bind(this));
        } catch(e) {
            console.log(e);
            callback(e);
        }
        callback('success');
    },

    /**
     *
     * @param error
     */
    onError: function(error) {
        console.log("SOCKET ERROR" , this.socket.id);
        console.log(error);
    }

};


module.exports = SocketHandler;