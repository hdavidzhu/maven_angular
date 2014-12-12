'use strict';

/**
 * @ngdoc function
 * @name mavenAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mavenAngularApp
 */
angular.module('mavenAngularApp')
  .controller('ToolbarCtrl', function ($scope, qalist) {
  	$scope.total_matches = qalist.questionMatches.length + qalist.answerMatches.length;
  	$scope.questionMatches = qalist.questionMatches.length;
  	$scope.answerMatches = qalist.answerMatches.length;
  });