'use strict';

/**
 * @ngdoc overview
 * @name bikeNightApp
 * @description
 * # bikeNightApp
 *
 * Main module of the application.
 */
angular
  .module('bikeNightApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise( function( ) {
      return '/home';
    } );

    $stateProvider
      .state( 'default', {
        abstract: true,
        template: '<app-container></app-container>',

      } )
      .state( 'default.home', {
        url: '/home',
        views: {
          'toolbar': { template: '<app-toolbar></app-toolbar>' },
          'content': { template: '<app-content></app-content>' },
          'footer': { template: '<app-footer></app-footer>' }
        }
      } );
  });
