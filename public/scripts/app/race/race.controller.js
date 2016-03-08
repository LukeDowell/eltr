/**
 * Created by ldowell on 3/8/16.
 */

'use strict';
angular.module('eltr')
    .controller('RaceController', ['$scope', function($scope) {

        /**
         * A list of all the participants in this race
         * @type {Array}
         */
        $scope.participants = [];

    }]);