var app = angular.module('pizza');

app.controller('GetOrder', ['$scope','$routeParams', function($scope, $routeParams) {
  var id = $routeParams.id;
  $http({url: '/api/orders/' + id, method: 'GET'})
  .success(function (data, status, headers, config) {
    $scope.order = data;
  })
  .error(function (data, status, headers, config) {
    console.log(data);
  });

}]);
