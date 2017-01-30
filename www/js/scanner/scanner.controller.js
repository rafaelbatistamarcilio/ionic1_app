(function () {
  'use strict';

  angular
    .module('scanner')
    .controller('ScannerController', ScannerController);

  ScannerController.$inject = ['$cordovaBarcodeScanner'];

  /* @ngInject */
  function ScannerController($cordovaBarcodeScanner) {

    /** variables declaration */
    var vm = this;
    vm.$cordovaBarcodeScanner = $cordovaBarcodeScanner;

    /** functions declararion */
    vm.scan = scan;

    /** functions implementatio */
    function scan() {
      vm.$cordovaBarcodeScanner
        .scan()
        .then(
          function (barcodeData) {
            vm.scannerData = barcodeData;
          },
          function (error) {
            vm.scannError = error;
          }
        );
    }
  }
})();
