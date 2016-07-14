var app = angular.module('pizza');

app.controller('GetOrderCtrl', [ '$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
  var id = $routeParams.id;

  $http({url: '/api/orders/get/' + id, method: 'GET'})
  .success(function (data, status, headers, config) {
    $scope.order = data;
  })
  .error(function (data, status, headers, config) {
    console.log(data);
  });
}]);
