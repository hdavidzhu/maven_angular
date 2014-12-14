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
	if (localStorage.getItem("question") == null) {
		$scope.question = "What is it like to be a woman in tech?";
	} else {
		$scope.question = localStorage.getItem("question");
	}

	var populateProfiles = function(qa_mode){
		$scope.qalist = qalist;
		if (qa_mode == "/ask") {
			$scope.displayList = $scope.qalist.questionMatches;
			if ($scope.qalist.questionMatches.length != 0) {
				$scope.myAskMatches = true;
			}
		} else if (qa_mode == "/answer") {
			$scope.displayList = $scope.qalist.answerMatches;
			if ($scope.qalist.answerMatches.length != 0) {
				$scope.myAnswerMatches = true;
			}
		}
	}

	$scope.goToProfile = function (person_id){
		var host = $location.host();
		$location.path( "/profile/person/" + person_id);
	};
	
	$scope.saveQuestion = function (){
		if ($scope.question != localStorage.getItem("question")) {
			localStorage.setItem("question", $scope.question);
			qalist.questionMatches = [];
		}

		if ($scope.question.length > 0) {
			$location.path("/profile/discover_answerers");
		} else {
			alert("Put in question please!");
		}
	}

	switch (qa_mode) {
		case "/ask":
			$scope.q_form_show = true; 
			populateProfiles(qa_mode);
			break;
		case "/answer":
			$scope.a_form_show = true;
			populateProfiles(qa_mode);
			break;
	}
});	