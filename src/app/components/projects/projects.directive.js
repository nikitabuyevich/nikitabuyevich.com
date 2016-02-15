(function() {
  'use strict';

  angular
    .module('nikitabuyevichCom')
    .directive('projects', projects);

  /** @ngInject */
  function projects() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/projects/projects.html',
      compile: function() {
        alert(document.querySelector('.canvas-area').clientHeight);
      }
    };

    return directive;
  }

})();
