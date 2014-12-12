'use strict';

/**
 * @ngdoc function
 * @name mavenAngularApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the mavenAngularApp
 */

 angular.module('mavenAngularApp')
  .controller('QACtrl', function ($scope, $location, qalist) {
  	var qa_mode = $location.path();
  	$scope.displayList = [];

  	var populateProfiles = function(qa_mode){
			$scope.qalist = qalist;
			if (qa_mode == "/ask") {
				$scope.displayList = $scope.qalist.questionMatches;
			} else if (qa_mode == "/answer") {
				$scope.displayList = $scope.qalist.answerMatches;
			}
		}

		$scope.goToProfile = function(person_id){
			// console.log(person_id);
			var host = $location.host();
			console.log($location.path());
			// console.log(host + "/#/profile/person/"+ person_id);
			$location.path( "/profile/person/" + person_id);
		}

		switch (qa_mode) {
			case "/ask":
				$scope.q_form_show = true; 
				populateProfiles(qa_mode);
				console.log($scope.displayList);
				break;
			case "/answer":
				$scope.a_form_show = true;
				populateProfiles(qa_mode);
				break;
		}
  });