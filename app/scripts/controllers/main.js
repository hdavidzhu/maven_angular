'use strict';

/**
 * @ngdoc function
 * @name mavenAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mavenAngularApp
 */
angular.module('mavenAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
