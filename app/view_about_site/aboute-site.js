'use strict';

angular.module('myApp.about_site', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about-site', {
    templateUrl: 'view_about_site/about-site.html',
    controller: 'ScrollToTopCtrl'
  });
}])
