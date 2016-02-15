(function() {
  'use strict';

  angular
    .module('nikitabuyevichCom')
    .value('duScrollDuration', 1250)
    .directive('navbar', navbar)
    .controller('ScrollToCtrl', function($scope, $document){}).value('duScrollOffset', 10);

  /** @ngInject */
  function navbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      
    };

    return directive;

  }
})();
