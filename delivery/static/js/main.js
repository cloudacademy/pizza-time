//Loads Angular
angular.module('pizza', ['ngRoute'])
.config(function($routeProvider, $locationProvider){
  $locationProvider.html5Mode(false);
  $routeProvider.when('/', {
    templateUrl: 'static/partials/home.html'
  })
  .when('/about', {
    templateUrl: 'static/partials/about.html',
    // controller: 'AboutController'
  })
  .when('/orders', {
    templateUrl: 'static/partials/orders.html',
    controller: 'OrdersCtrl'
  })
})
.factory('authInterceptor', function ($rootScope, $q, $window) {
  return {
    request: function (config) {
      config.headers = config.headers || {};
      if ($window.sessionStorage.token) {
        config.headers.Authorization = 'JWT ' + $window.sessionStorage.token;
      }
      return config;
    },
    responseError: function (rejection) {
      if (rejection.status === 401) {
        // handle the case where the user is not authenticated
      }
      return $q.reject(rejection);
    }
  };
})
.config(function ($httpProvider) {
  $httpProvider.interceptors.push('authInterceptor');
});
