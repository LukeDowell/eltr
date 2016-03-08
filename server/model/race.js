/**
 * Created by ldowell on 3/8/16.
 */

/**
 * A representation of a single race event
 * @constructor
 */
var Race = function() {

    /**
     * This race's id
     * @type {undefined}
     */
    this.id = undefined;

    /**
     * The players participating in this race
     * @type {Array}
     */
    this.players = [];

    /**
     * This race's subject, or quote
     * @type {undefined}
     */
    this.subject = undefined;
};
var proto = Race.prototype;

module.exports = Race;