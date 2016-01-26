(function() {
  'use strict';

  angular
    .module('nikitabuyevichCom')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
