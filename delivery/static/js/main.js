//Loads Angular
angular.module('pizza', ['ngRoute'])
.config(function($routeProvider, $locationProvider){
  $locationProvider.html5Mode(true);
  $routeProvider.when('/', {
    templateUrl: 'static/partials/home.html'
  })
  .when('/about', {
    templateUrl: 'static/partials/about.html',
    // controller: 'AboutController'
  })
  .when('/auth', {
    templateUrl: 'static/partials/auth.html',
    // controller: 'AboutController'
  })
  .otherwise({
    redirectTo: '/'
  })
});
