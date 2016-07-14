var app = angular.module('pizza');

app.controller('NewOrderCtrl', function ($scope, $http, $window) {

  $http({url: '/api/pizzas/get', method: 'GET'})
  .success(function (data, status, headers, config) {
    $scope.pizzas = data;
    console.log(data);
  })
  .error(function (data, status, headers, config) {
    console.log(data);
  });

  $scope.order = {
    "user": "",
    "pizzas": [],
    "total": null,
    "status": ""
  };

  $scope.order.total =

  $scope.getToken = function (config) {
    config.headers = config.headers || {};
    if ($window.sessionStorage.token) {
      config.headers.Authorization = 'JWT ' + $window.sessionStorage.token;
    }
    return config;
  };

  $scope.submit = function () {
    $http
      .post('/api/orders/new', $scope.user, $scope.getToken())
      .success(function (data, status, headers, config) {
        console.log(data);
      })
      .error(function (data, status, headers, config) {
      });
  };





})
