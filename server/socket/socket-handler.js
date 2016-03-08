'use strict';

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