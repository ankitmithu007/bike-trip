
(function() {
  'use strict';

  function appFooter() {

    return {
      restrict: 'E',
      templateUrl: 'footer/app-footer.html',
      controller: 'appFooterCtrl',
      controllerAs: '$ctrl',
      scope:{}
    };
  }
  angular.module( 'bikeNightApp' ).directive( 'appFooter', appFooter );
}());

