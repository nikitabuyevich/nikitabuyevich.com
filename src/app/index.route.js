(function() {
  'use strict';

  angular
    .module('nikitabuyevichCom')
    .config(routerConfig);
  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
