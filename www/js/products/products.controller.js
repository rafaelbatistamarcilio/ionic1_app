(function () {
  'use strict';

  angular
    .module('products')
    .controller('ProductsController', ProductsController);

  ProductsController.$inject = ['$state', 'ProductsService'];

  /* @ngInject */
  function ProductsController($state, ProductsService) {

    /** variables declaration */
    var vm = this;
    vm.$state = $state;
    vm.products = ProductsService.findAll();
    vm.shouldShowDelete = false;
    vm.shouldShowReorder = false;
    vm.listCanSwipe = true;
    vm.data = {
      showDelete: false
    };

    /** functions declararion */
    vm.productDetail = productDetail;
    vm.newProduct = newProduct;
    vm.moveItem = moveItem;
    vm.onItemDelete = onItemDelete;

    /** functions implementatio */
    function productDetail(productId) {
      vm.$state.go('app.product-detail', {
        id: productId
      });
    }

    function newProduct() {
      vm.$state.go('app.product-new');
    }

    function moveItem(item, fromIndex, toIndex) {
      vm.products.splice(fromIndex, 1);
      vm.products.splice(toIndex, 0, item);
    };

    function onItemDelete (item) {
      vm.productsService.remove(item);
    };
  }
})();
