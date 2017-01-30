(function () {
  'use strict';

  angular
    .module('geolocation')
    .config(GeolocationRouting);

  GeolocationRouting.$inject = ['$stateProvider'];

  function GeolocationRouting($stateProvider) {

    $stateProvider
      .state('app.geolocation', {
        url: '/geolocation',
        views: {
          'menuContent': {
            templateUrl: 'js/geolocation/geolocation.html',
            controller: 'GeolocationController',
            controllerAs: '$ctrl'
          }
        }
      });
  }
})();
