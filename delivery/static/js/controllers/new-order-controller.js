var app = angular.module('pizza');

app.controller('NewOrderCtrl', function ($scope, $http, $window, $rootScope) {
  $scope.review = false;
  $scope.cart = [];
  $scope.review = false;

  $http({url: '/api/pizzas/get', method: 'GET'})
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

      $scope.order.total += 5;
      $scope.order.total = $scope.order.total.toFixed(2);
      $scope.order.total = $scope.order.total.toString();

      $scope.review = true;
  };

  $scope.submitOrder = function () {
    var req = {
    	url: '/api/orders/new/',
    	method: 'POST',
    	headers: {
    		'Authorization': "JWT " + $rootScope.sessionToken,
        'Content-Type': 'application/json'
    	},
    	data: $scope.order
    };
    $http(req)
    .success(function (data, status, headers, config) {
      alert(data);
    })
    .error(function (data, status, headers, config) {
      console.log(data);
    });
  };




});
