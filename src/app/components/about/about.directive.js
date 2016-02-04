(function() {
  'use strict';

  angular
    .module('nikitabuyevichCom')
    .directive('about', about);

  /** @ngInject */
  function about() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/about/about.html'
    };

    return directive;
  }

})();
