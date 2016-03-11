/**
 * Created by ldowell on 3/9/16.
 */
(function() {
    'use strict';

    angular.module('eltr')
        .factory('Race', ['$q', 'socket', function($q, socket) {

            var _participants, // The participants in a race
                _subject, // The race's subject
                _isActive; // Whether or not a race is currently happening

            var Channels = socket.Channels;

            return {

                /**
                 * Starts a new race
                 */
                createRace: function(callback) {
                    socket.emit(Channels.CREATE_RACE, '', (callback || angular.noop));
                },

                /**
                 *
                 * @param force
                 * @returns {IPromise<T>}
                 */
                subject: function(force) {
                    var deferred = $q.defer();

                    if(force) {
                        _subject = undefined;
                    }

                    if(angular.isDefined(_subject)) {
                        deferred.resolve(_subject);
                        return deferred.promise;
                    }

                    /*

                     */
                    this.updateRaceData()
                        .then(function(subject, participants) {
                            deferred.resolve(subject);
                        });

                    return deferred.promise;
                },

                /**
                 *
                 * @param force
                 * @returns {IPromise<T>}
                 */
                participants: function(force) {
                    var deferred = $q.defer();

                    if(force) {
                        _participants = undefined;
                    }

                    if(angular.isDefined(_participants)) {
                        deferred.resolve(_participants);
                        return deferred.promise;
                    }

                    /*

                     */
                    this.updateRaceData()
                        .then(function(subject, participants) {
                            deferred.resolve(participants);
                        });

                    return deferred.promise;
                },

                /**
                 *
                 */
                updateRaceData: function() {
                    var deferred = $q.defer();

                    socket.emit(Channels.RACE_UPDATE, '', function(response) {
                        if(response.err) {
                            console.log("RACE UPDATE ERROR " , response.err)
                        }

                        if(response.subject) {
                            _subject = response.subject;
                        } else {
                            // TODO
                        }

                        if(response.participants) {
                            _participants = response.participants;
                        } else {
                            // How to deal with this?
                        }

                        deferred.resolve(_subject, _participants);
                    });

                    return deferred.promise;
                }
            }
        }]);
})();