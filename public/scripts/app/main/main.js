/**
 * Created by ldowell on 3/7/16.
 */
(function() {
    'use strict';

    angular.module('eltr')
        .config(['$stateProvider', function($stateProvider) {
            $stateProvider
                .state('main', {
                    parent: 'site',
                    url: '/',
                    views: {
                        'content@': {
                            templateUrl: 'scripts/app/main/main.html',
                            controller: 'MainController'
                        }
                    }
                })
        }]);
})();