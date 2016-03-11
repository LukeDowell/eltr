/**
 * Created by ldowell on 3/9/16.
 */
//TODO Documentation
var Channels = {

    /**
     * When received server side,
     */
    JOIN_RACE: 'joinrace',

    /**
     *
     */
    LEAVE_RACE: 'leaverace',

    /**
     * Sent from the client to the server when the user initiates the
     * create race process.
     *
     * When the client is receiving this event, it contains initialization
     * data for the race (the subject text, other participants if there are any,
     * etc.)
     */
    CREATE_RACE: 'createrace',

    /**
     *
     */
    START_RACE: 'startrace',

    /**
     * When received server side, indicates the client would like to update their current
     * race information.
     *
     * When received client side, contains data regarding the current race. Examples are
     * participant progress, words per minute, and whether or not they have
     * completed the race.
     */
    RACE_UPDATE: 'raceupdate'
};

module.exports = Channels;