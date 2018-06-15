'use strict';

angular.module('myApp.contact', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contact', {
    templateUrl: 'view_contact/contact.html',
    controller: 'ViewContactCtrl'
  });
}])

.controller('ViewContactCtrl', [function() {

}]);