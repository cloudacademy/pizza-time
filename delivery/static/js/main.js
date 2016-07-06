//Loads Angular
angular.module('pizza', ['ngRoute'])
.config(function($routeProvider, $locationProvider){


  $locationProvider.html5Mode(true);

  $routeProvider.when('/', {
    templateUrl: 'static/partials/home.html'
  });

  $routeProvider.when('/about', {
    templateUrl: 'static/partials/about.html',
    controller: 'AboutController'
  });

  $routeProvider.otherwise({
    redirectTo: '/'
  })
});
