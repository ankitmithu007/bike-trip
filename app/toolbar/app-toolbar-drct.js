
(function() {
  'use strict';

  function appToolbar() {

    return {
      restrict: 'E',
      templateUrl: 'toolbar/app-toolbar.html',
      controller: 'appToolbarCtrl',
      controllerAs: '$ctrl',
      scope:{}
    };
  }
  angular.module( 'bikeNightApp' ).directive( 'appToolbar', appToolbar );
}());

