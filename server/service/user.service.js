/**
 * Created by ldowell on 3/11/16.
 */


module.exports = {

    /**
     * TODO implement
     * @param socket
     * @returns {{}}
     */
    getUserBySocket: function(socket) {
        var someUser = {

            // Example Participant
            'name': 'Sweet JP asdfasdf',

            'wpm': 200, // Words per minute

            'percentComplete': 75, // The last known percentage of completion

            'place': 1 // Whatever place this participant got in the race, if finished

        };

        return someUser;
    }
};