'use strict';

angular.module('test.app').config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
      .when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'AboutController'
      })
    .when('/help', {
        templateUrl: 'partials/help.html',
        controller: 'HelpController'
      })
  }
]);
