(function () {
  'use strict';

  angular
    .module('products')
    .config(ProductsRouting);

  ProductsRouting.$inject = ['$stateProvider'];

  function ProductsRouting($stateProvider) {

    $stateProvider
      .state('app.products-list', {
        url: '/products',
        views: {
          'menuContent': {
            templateUrl: 'js/products/products.html',
            controller: 'ProductsController',
            controllerAs: '$ctrl'
          }
        }
      })
      .state('app.product-new', {
        url: '/products/new',
        views: {
          'menuContent': {
            templateUrl: 'js/products/product-register/product-register.html',
            controller: 'ProductRegisterController',
            controllerAs: '$ctrl'
          }
        }
      })
      .state('app.product-edit', {
        url: '/products/:id/edit',
        views: {
          'menuContent': {
            templateUrl: 'js/products/product-register/product-register.html',
            controller: 'ProductRegisterController',
            controllerAs: '$ctrl'
          }
        }
      })
      .state('app.product-detail', {
        url: '/products/:id',
        views: {
          'menuContent': {
            templateUrl: 'js/products/product-detail/product-detail.html',
            controller: 'ProductDetailController',
            controllerAs: '$ctrl'
          }
        }
      });
  }
})();
