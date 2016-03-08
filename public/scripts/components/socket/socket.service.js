/**
 * Created by ldowell on 3/7/16.
 */

angular.module('eltr')
    .factory('IO', [function() {
        var socket = io.connect();


        return socket;
    }]);