(function() {
  'use strict';

  angular
    .module('nikitabuyevichCom')
    .config(config);

  /** @ngInject */
  function config($logProvider, $locationProvider) {
    // Enable log
    if(window.history && window.history.pushState){
      $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
      });
    }
  }

})();
