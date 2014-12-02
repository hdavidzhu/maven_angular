'use strict';

/**
 * @ngdoc function
 * @name mavenAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mavenAngularApp
 */
angular.module('mavenAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });