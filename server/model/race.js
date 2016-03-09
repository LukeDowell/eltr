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
     * The players participating in this race. The original creator,
     * or 'owner', of this race is always at index 0.
     *
     * @type {Array}
     */
    this.participants = [];

    /**
     * This race's subject, or quote
     * @type {undefined}
     */
    this.subject = undefined;
};
Race.prototype = {

};

module.exports = Race;