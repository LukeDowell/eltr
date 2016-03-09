/**
 * Created by ldowell on 3/7/16.
 */
(function() {
    'use strict';

    angular.module('eltr')
        .factory('socket', [function() {
            var socket = window.io.connect();


            return socket;
        }]);
})();