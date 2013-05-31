'use strict';

var app = angular.module('uiApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'IterationCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
