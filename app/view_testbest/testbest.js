'use strict';

angular.module('myApp.testbest', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/testbest', {
    templateUrl: 'view_testbest/testbest.html',
    controller: 'ScrollToTopCtrl'
  });
}])
