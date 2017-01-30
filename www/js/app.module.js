(function () {
  'use strict';

  /** module with shared dependencies */
  angular.module('shared', ['ionic','ngCordova']);

  /** functional modules */
  angular.module('products', ['shared']);  
  angular.module('scanner', ['shared']);
  angular.module('geolocation', ['shared']);    
  
  /** main module */
  angular.module('app', [
      'shared',
      'products',
      'scanner',
      'geolocation'
    ]);
})();
