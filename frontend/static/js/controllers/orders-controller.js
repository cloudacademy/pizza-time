var app = angular.module('pizza');



app.controller('OrdersCtrl', function ($scope, $http, $window) {
  $http({url: $rootScope.APIURL + '/api/orders/get', method: 'GET'})
  .success(function (data, status, headers, config) {
    $scope.orders = data;
  })
  .error(function (data, status, headers, config) {
    console.log(data);
  });
});
