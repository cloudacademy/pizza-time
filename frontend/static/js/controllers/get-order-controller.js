var app = angular.module('pizza');

app.controller('GetOrderCtrl', [ '$scope', '$routeParams', '$http', '$rootScope', function($scope, $routeParams, $http, $rootScope) {
  var id = $routeParams.id;
  if ($routeParams.new == 'new'){
    $scope.isNewOrder = true;
  };

  $http({url: $rootScope.APIURL + '/api/orders/get/' + id + '/', method: 'GET'})
  .success(function (data, status, headers, config) {
    $scope.order = data;
  })
  .error(function (data, status, headers, config) {
    console.log(data);
  });
}]);
