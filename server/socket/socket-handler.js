'use strict';

var Events = require('./socket-events');

/**
 * Creates a socket.io connection handler. Takes the IO
 * api as a parameter
 *
 * @param io
 * @constructor
 */
var SocketHandler = function(io) {

    /**
     * SocketIO API
     */
    this.io = io;

    this.init();
};
var proto = SocketHandler.prototype;

/**
 * Setup
 */
proto.init = function() {
    this.io.on('connection', this.onConnect);
    this.io.on(Events.CREATE_RACE, this.onCreateRace);
    this.io.on(Events.JOIN_RACE, this.onJoinRace);
    this.io.on(Events.LEAVE_RACE, this.onLeaveRace);
};

/**
 *
 * @param socket
 */
proto.onLeaveRace = function(socket) {
    console.log("LEAVING RACE " , socket.id);
};

/**
 *
 * @param socket
 */
proto.onJoinRace = function(socket) {
    console.log("JOINING RACE " , socket.id);
};

/**
 *
 * @param socket
 */
proto.onCreateRace = function(socket) {
    console.log("CREATING RACE " , socket.id);
};

/**
 * SocketIO entry point (minus setup code in bin/www)
 *
 * @param socket
 */
proto.onConnect = function(socket) {
    console.log('Socket Connected!', socket.id);
};


module.exports = SocketHandler;