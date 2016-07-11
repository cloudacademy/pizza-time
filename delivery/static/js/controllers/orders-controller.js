var app = angular.module('pizza');



app.controller('OrdersCtrl', function ($scope, $http, $window) {

  $http({url: '/api/pizzas', method: 'GET'})
  .success(function (data, status, headers, config) {
    $scope.pizzas = data;
  })
  .error(function (data, status, headers, config) {
    console.log(data);
  });

  $http({url: '/api/orders', method: 'GET'})
  .success(function (data, status, headers, config) {
    $scope.orders = data;
  })
  .error(function (data, status, headers, config) {
    console.log(data);
  });

});
