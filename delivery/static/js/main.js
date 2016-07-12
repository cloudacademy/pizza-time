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
    controller: 'OrdersCtrl',
  })
  .when('/orders/:id', {
    templateUrl: 'static/partials/order.html',
    controller: 'OrdersCtrl',
  });
});
