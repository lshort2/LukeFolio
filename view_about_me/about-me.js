'use strict';

angular.module('myApp.about_me', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about-me', {
    templateUrl: 'view_about_me/about-me.html',
    controller: 'ViewAboutMeCtrl'
  });
}])

.controller('ViewAboutMeCtrl', [function() {

}]);