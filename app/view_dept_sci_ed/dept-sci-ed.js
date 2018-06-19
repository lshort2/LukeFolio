'use strict';

angular.module('myApp.dept_sci_ed', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dept-sci-ed', {
    templateUrl: 'view_dept_sci_ed/dept-sci-ed.html',
    controller: 'ScrollToTopCtrl'
  });
}])
