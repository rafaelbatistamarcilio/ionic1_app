(function () {    
    'use strict';

    angular
    .module('products')
    .controller('ProductDetailController', ProductDetailController); 
                
    ProductDetailController.$inject = ['$state','$stateParams','ProductsService'];
    
    /* @ngInject */
    function ProductDetailController($state,$stateParams,ProductsService){
        
        /** variables declaration */
        var vm = this;   
        vm.$state = $state;
        vm.$stateParams = $stateParams;
        vm.productsService = ProductsService;
        vm.product = vm.productsService.findById($stateParams.id);
        
        /** functions declararion */  
        vm.editProduct =  editProduct;

        /** functions implementatio */   
        function editProduct() {
            vm.$state.go('app.product-edit',{ id: vm.product.id });
        }           
    }
})();