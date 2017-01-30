(function () {    
    'use strict';

    angular
    .module('products')
    .controller('ProductRegisterController', ProductRegisterController); 
                
    ProductRegisterController.$inject = ['$state','$stateParams','ProductsService','$cordovaCamera'];
    
    /* @ngInject */
    function ProductRegisterController($state, $stateParams ,ProductsService,$cordovaCamera){
        
        /** variables declaration */
        var vm = this;   
        vm.$state = $state;
        vm.$stateParams = $stateParams;
        vm.product;// = RouteResolve.product;
        vm.productsService = ProductsService;
        vm.$cordovaCamera = $cordovaCamera;

        /** on init execute functions */
        if(vm.$stateParams.id) {
            vm.product = vm.productsService.findById(vm.$stateParams.id);
        }else{
            vm.product = {};
        }
        
        /** functions declararion */  
        vm.save =  save;
        vm.takePic = takePic;

        /** functions implementatio */   
        function save() {
            vm.productsService.save(vm.product);
            vm.$state.go('app.products-list');
        }       

        function takePic() {
            var options = {
                quality: 50,
                destinationType: Camera.DestinationType.DATA_URL,
                saveToPhotoAlbum:true
            }

            function successFunction(imageData){
                vm.error = "PIC OK";
                vm.product.img =  "data:image/jpeg;base64," + imageData;
            }

            function errorFunction(error){
                vm.error = "ERROR: " + error;
            }

            vm.$cordovaCamera.getPicture(options).then(successFunction,errorFunction);
        }    
    }
})();