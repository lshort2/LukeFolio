'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'view_home/home.html',
    controller: 'ScrollToTopCtrl'
  });
}])
