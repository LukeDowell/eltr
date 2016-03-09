/**
 * Created by ldowell on 3/9/16.
 */
(function() {
    'use strict';

    angular.module('eltr')
        .factory('Race', ['IO', function(IO) {
            var instance = null;

            /**
             *
             * @constructor
             */
            var Race = function() {

                /**
                 *
                 * @type {Array}
                 */
                this.participants = [];

                /**
                 *
                 * @type {undefined}
                 */
                this.subject = undefined;

                this.init();
            };
            var proto = Race.prototype;

            proto.init = function() {

            };

            function getInstance() {
                if(instance === null) {
                    instance = new Race();
                }
                return instance;
            }
            return getInstance();
        }]);
})();