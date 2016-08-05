//Loads Angular
angular.module('pizza', ['ngRoute'])
.config(function($routeProvider, $locationProvider, $rootScope){
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
  .when('/orders/:id/:new', {
    templateUrl: 'static/partials/order.html',
    controller: 'GetOrderCtrl',
  });

  $rootScope.APIURL = "http://ec2-52-40-45-37.us-west-2.compute.amazonaws.com"

});
