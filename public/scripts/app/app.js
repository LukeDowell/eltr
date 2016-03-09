/**
 * Created by ldowell on 3/7/16.
 *
 * THEMING RELATED URLS
 * Color Palette:  www.google.com/design/spec/color.html#color-color-palette
 * Angular Material: material.angularjs.org/latest/Theming/01_introduction
 */
(function() {
    'use strict';

    angular.module('eltr', ['ngAria', 'ui.router', 'ngMessages', 'ngMaterial'])
        .config(['$stateProvider', '$urlRouterProvider', '$mdThemingProvider',
            function($stateProvider, $urlRouterProvider, $mdThemingProvider) {

                /////////////
                // ROUTING //
                /////////////

                $urlRouterProvider.otherwise('/');
                $stateProvider
                    .state('site', {
                        'abstract': true,
                        'views': {
                            'navbar@': {
                                templateUrl: 'scripts/components/navbar/navbar.html',
                                controller: 'NavbarController'
                            }
                        }
                    });

                /////////////
                // THEMING //
                /////////////

                $mdThemingProvider.theme('default')
                    .primaryPalette('grey', {
                        'default': '900',
                        'hue-1': '300'
                    })
                    .accentPalette('red', {
                        'default': '600'
                    });
            }]);

})();