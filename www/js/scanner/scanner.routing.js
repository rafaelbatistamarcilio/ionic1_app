(function () {
  'use strict';

  angular
    .module('scanner')
    .config(ScannerRouting);

  ScannerRouting.$inject = ['$stateProvider'];

  function ScannerRouting($stateProvider) {

    $stateProvider
      .state('app.scanner', {
        url: '/scanner',
        views: {
          'menuContent': {
            templateUrl: 'js/scanner/scanner.html',
            controller: 'ScannerController',
            controllerAs: '$ctrl'
          }
        }
      });
  }
})();
