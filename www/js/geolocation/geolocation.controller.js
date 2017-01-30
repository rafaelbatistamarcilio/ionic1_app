(function () {
  'use strict';

  angular
    .module('geolocation')
    .controller('GeolocationController', GeolocationController);

  GeolocationController.$inject = ['$cordovaGeolocation'];

  /* @ngInject */
  function GeolocationController($cordovaGeolocation) {

    /** variables declaration */
    var vm = this;
    vm.locationData = {};
    vm.$cordovaGeolocation = $cordovaGeolocation;

    /** functions declararion */
    vm.getLocation = getLocation;
    vm.getDistance = getDistance;
    vm.deg2rad = deg2rad;

    /** functions implementatio */
    function getLocation() {
      var posOptions = {
        timeout: 10000,
        enableHighAccuracy: false
      };

      vm.$cordovaGeolocation
        .getCurrentPosition(posOptions)
        .then(
          function (position) {
            vm.locationData.lat = position.coords.latitude
            vm.locationData.long = position.coords.longitude

            vm.distanceFrom = vm.getDistance(vm.locationData, { lat: 55.752174, long: 37.617135 });
          },
          function (err) {
            vm.locationError = err;
          }
        );
    }

    function getDistance(location1, location2) {

      try {
        var R = 6371; // Radius of the earth in km
        var dLat = deg2rad(location2.lat - location1.lat); // deg2rad below
        var dLon = deg2rad(location2.long - location1.long);

        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(vm.deg2rad(location1.lat)) * Math.cos(vm.deg2rad(location2.lat)) *
          Math.sin(dLon / 2) * Math.sin(dLon / 2);

        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;

      } catch (error) {
        return error.message;
      }


    }

    function deg2rad(deg) {
      return deg * (Math.PI / 180)
    }
  }
})();
