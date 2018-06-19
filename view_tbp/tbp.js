'use strict';

angular.module('myApp.tbp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tbp', {
    templateUrl: 'view_tbp/tbp.html',
    controller: 'ScrollToTopCtrl'
  });
}])
