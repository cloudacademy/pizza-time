var app = angular.module('pizza');

app.controller('NewOrderCtrl', function ($scope, $http, $window, $rootScope) {
  $scope.review = false;
  $scope.cart = [];
  $scope.review = false;

  $http({url: $rootScope.APIURL + '/api/pizzas/get/', method: 'GET'})
  .success(function (data, status, headers, config) {
    $scope.pizzasList = data;
  })
  .error(function (data, status, headers, config) {
    console.log(data);
  });

  $scope.order = {
    user: $rootScope.authInfo.url,
    pizzas: [],
    total: 5.00,
    status: "Ordered"
  };


  $scope.checkout = function (){
      $scope.order = {
        user: $rootScope.authInfo.url,
        pizzas: [],
        total: 5.00,
        status: "Ordered"
      };
      $scope.selectedPizzas = [];

      for (var i = 0 ; i < $scope.cart.length ; i++){
        var obj = JSON.parse($scope.cart[i]);
        $scope.order.total += Number(obj.price);
        $scope.order.pizzas.push(obj.url);
        $scope.selectedPizzas.push({name: obj.name, price: obj.price });
      };
      if ($scope.order.pizzas.length > 0){
        $scope.order.total += 5;
        $scope.order.total = $scope.order.total.toFixed(2);
        $scope.order.total = $scope.order.total.toString();

        $scope.review = true;
    };
  };

  $scope.submitOrder = function () {
    $http.post($rootScope.APIURL + '/api/orders/new/', $scope.order)
    .success(function (data, status, headers, config) {
      console.log(data);
      $window.location.href = '#/orders/' + data.id + '/new/';
    })
    .error(function (data, status, headers, config) {
      console.log($scope.order);
      console.log(data);
    });
  };




});
