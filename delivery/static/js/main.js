//Loads Angular
angular.module('pizza', ['ngRoute'])
.config(function($routeProvider, $locationProvider){
  $locationProvider.html5Mode(false);
  $routeProvider.when('/', {
    templateUrl: 'static/partials/home.html'
  })
  .when('/about', {
    templateUrl: 'static/partials/about.html',
  })
  .when('/orders', {
    templateUrl: 'static/partials/orders.html',
    controller: 'OrdersCtrl',
  })
  .when('/new-order', {
    templateUrl: 'static/partials/new-order.html',
    controller: 'NewOrderCtrl',
  })
  .when('/orders/:id', {
    templateUrl: 'static/partials/order.html',
    controller: 'GetOrderCtrl',
  });
});
