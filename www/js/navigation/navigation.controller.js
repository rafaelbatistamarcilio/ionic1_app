(function () {    
    'use strict';

    angular
    .module('app')
    .controller('NavigationController', NavigationController); 
                
    NavigationController.$inject = ['$state'];
    
    /* @ngInject */
    function NavigationController($state){
        
        /** variables declaration */
        var vm = this;   
        vm.$state = $state;
        
        /** functions declararion */           
    }
})();