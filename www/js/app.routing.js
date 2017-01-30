(function () {
    'use strict';

    angular
      .module('app')
      .config(AppRouting);

    AppRouting.$inject = ['$stateProvider', '$urlRouterProvider','$compileProvider'];

    function AppRouting($stateProvider, $urlRouterProvider,$compileProvider) {

      $stateProvider
        .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'js/navigation/navigation.html'
        })
        .state('app.main', {
          url: '/main',
          views: {
            'menuContent': {
              templateUrl: 'js/main/main.html'
            }
          }
        });
      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/app/main');

      $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|file|blob|cdvfile):|data:image\//);
    }
})();
