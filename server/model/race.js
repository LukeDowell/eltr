/**
 * Created by ldowell on 3/8/16.
 */

var uuid = require('node-uuid');

/**
 * A representation of a single race event
 * @constructor
 */
var Race = function() {

    /**
     * This race's id. Also
     * @type {undefined}
     */
    this.id = undefined;

    /**
     * The players participating in this race. The original creator,
     * or 'owner', of this race is always at index 0.
     *
     * @type {Array}
     */
    this.participants = [];

    /**
     * This race's subject.
     * @type {Subject}
     */
    this.subject = undefined;

    this.init();
};
Race.prototype = {

    init: function() {
        /**
         * Generates a random uuid
         */
        this.id = uuid.v4();
    }
};

module.exports = Race;