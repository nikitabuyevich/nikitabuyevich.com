(function() {
  'use strict';

  angular
    .module('nikitabuyevichCom')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, $locationProvider) {
    // Enable log
    if(window.history && window.history.pushState){
      $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
      });
    }
    
    $locationProvider.html5Mode(true);
    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
  }

})();
