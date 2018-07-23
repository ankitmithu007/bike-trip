
(function() {
  'use strict';

  function appContent() {

    return {
      restrict: 'E',
      templateUrl: 'content/app-content.html',
      controller: 'appContentCtrl',
      controllerAs: '$ctrl',
      scope:{}
    };
  }
  angular.module( 'bikeNightApp' ).directive( 'appContent', appContent );
}());

