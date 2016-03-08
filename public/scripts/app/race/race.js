'use strict';

angular.module('eltr')
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('race', {
                parent: 'site',
                url: '/',
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/race/race.html',
                        controller: 'RaceController'
                    }
                }
            });
    }]);