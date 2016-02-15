(function() {
  'use strict';

  angular
    .module('nikitabuyevichCom')
    .directive('skills', skills);

  /** @ngInject */
  function skills() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/skills/skills.html'
    };

    return directive;
  }

})();
