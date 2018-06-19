'use strict';

angular.module('myApp.linkedin', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/linkedin', {
    templateUrl: 'view_linkedin/linkedin.html',
    controller: 'ScrollToTopCtrl'
  });
}])
