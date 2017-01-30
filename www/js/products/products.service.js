(function () {
  'use strict';
  angular
    .module('products')
    .service('ProductsService', ProductsService);

  ProductsService.$inject = ['$http'];

  function ProductsService($http) {
    /** variables */
    var vm = this;

    vm.products = [{
        id: 1,
        name: 'product 1',
        img: 'aksldjlsajdas'
      },
      {
        id: 2,
        name: 'product 2',
        img: 'aksldjlsajdas'
      },
      {
        id: 3,
        name: 'product 3',
        img: 'aksldjlsajdas'
      },
      {
        id: 4,
        name: 'product 4',
        img: 'aksldjlsajdas'
      }
    ]

    /** functions */
    vm.save = save;
    vm.update = update;
    vm.findAll = findAll;
    vm.findById = findById;
    vm.remove = remove;

    function save(obj) {
      obj.id = Number(obj.id);
      
      if (obj.id) {
        vm.update(obj);
      } else {
        obj.id = Number(vm.products.length + 1);
        vm.products.push(obj);
        console.log(vm.products);
      }
    }

    function update(obj) {

      vm.products.forEach(
        function (item) {
          if (item.id === obj.id) {
            item = obj;
          }
        }
      );
    }

    function findAll() {
      return vm.products;
    }

    function findById(id) {
      var product = null;

      vm.products.forEach(
        function (item) {
          if (item.id === Number(id)) {
            product = item;
          }
        }
      );

      return product;
    }

    function remove(item) {
      vm.products.splice(vm.products.indexOf(item), 1);
    }
  };
})();
