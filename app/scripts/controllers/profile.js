'use strict';

/**
 * @ngdoc function
 * @name mavenAngularApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the mavenAngularApp
 */

var samProfile = {
	"name": "Sam",
	"video": "gefPe38yo9g",
	"question": "What is my question?",
	"experience": ["Cats", "Dogs"],
	"passions": ["Birds", "Balloons"],
  "images": "../images/yeoman.png"
}

var sarahProfile = {
	"name": "Sarah",
	"video": "Mz9ZHGbq0f4",
	"question": "What is another question?",
	"experience": ["Cats", "Dogs"],
	"passions": ["Birds", "Balloons"],
  "images": "../images/yeoman.png"
}

var vickyProfile = {
	"name": "Vicky",
	"video": "97LgGWhJphE",
	"question": "I'm running out of ideas.",
	"experience": ["Cats", "Dogs"],
	"passions": ["Birds", "Balloons"],
  "images": "../images/yeoman.png"
}

var vinceProfile = {
	"name": "Vince",
	"video": "vOJ9Rcmijh0",
	"question": "We can fill these in later.",
	"experience": ["Cats", "Dogs"],
	"passions": ["Birds", "Balloons"],
  "images": "../images/yeoman.png"
}

var profileList = [samProfile, sarahProfile, vickyProfile, vinceProfile];

var questionMatches = [];

var answerMatches =[];

angular.module('mavenAngularApp')
  .controller('ProfileCtrl', function ($scope, $sce) {
  	$scope.profilenum = 0;

  	$scope.userProfile = profileList[$scope.profilenum];
  	$scope.video = $scope.userProfile.video;

  	$scope.profilePlus = function(){
  		$scope.profilenum = $scope.profilenum + 1;

  		if ($scope.profilenum >= profileList.length) {
  			$scope.profilenum = 0;
  		}

  		$scope.userProfile = profileList[$scope.profilenum];
  		$scope.video = $scope.userProfile.video;
  	}
  })
  .directive('userVideo', function($sce) {
  	return {
  	  restrict: 'EA',
  	  scope: { video:'=' },
  	  replace: true,
  	  template: '<div style="height:400px;"><iframe style="overflow:hidden;height:100%;width:100%" width="100%" height="100%" src="{{url}}" frameborder="0" allowfullscreen></iframe></div>',
  	  link: function (scope) {
  	      scope.$watch('video', function (newVal) {
  	         if (newVal) {
  	             scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + newVal + "?hd=1&rel=0&autohide=1&showinfo=0");
  	         }
  	      });
  	  }
  	};
  });