'use strict';

angular.module('myApp.github', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/github', {
    templateUrl: 'view_github/github.html',
    controller: 'ViewGithubCtrl'
  });
}])

.controller('ViewGithubCtrl', [function() {

}]);