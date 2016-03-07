/**
 * Created by ldowell on 3/7/16.
 */
'use strict';

angular.module('eltr', ['ngAria', 'ui.router', 'ngMessages', 'ngMaterial'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('site', {
                'abstract': true,
                'views': {
                    'navbar@': {
                        templateUrl: './scripts/components/navbar/navbar.html',
                        controller: 'NavbarController'
                    }
                }
            });
    }]);