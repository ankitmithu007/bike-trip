
(function() {
  'use strict';

  function appContainer() {

    return {
      restrict: 'E',
      templateUrl: 'container/app-container.html',
      controller: 'appContainerCtrl',
      controllerAs: 'container',
      scope:{}
    };
  }
  angular.module( 'bikeNightApp' ).directive( 'appContainer', appContainer );
}());

