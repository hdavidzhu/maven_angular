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
	"question": "What is it like being a woman in tech?",
	"experience": ["Cats", "Dogs"],
	"passions": ["Birds", "Balloons"],
  "images": "../images/yeoman.png"
}

var vickyProfile = {
	"name": "Vicky",
	"video": "97LgGWhJphE",
	"question": "Why are we here?",
	"experience": ["Cats", "Dogs"],
	"passions": ["Birds", "Balloons"],
  "images": "../images/yeoman.png"
}

var vinceProfile = {
	"name": "Vince",
	"video": "vOJ9Rcmijh0",
	"question": "What is the meaning of life?",
	"experience": ["Cats", "Dogs"],
	"passions": ["Birds", "Balloons"],
  "images": "../images/yeoman.png"
}

var profileList = [samProfile, sarahProfile, vickyProfile, vinceProfile];

var questionMatches = [];

var answerMatches =[];

angular.module('mavenAngularApp')
  .controller('ProfileCtrl', function ($scope, $sce, $location) {

    // To help us keep the profile lists random.
    function shuffle(o){ //v1.0
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };

    profileList = shuffle(profileList);

    var profile_mode = $location.path();

    switch(profile_mode) {
      case "/profile/discover_questioners":
        $scope.question_show = true;
        $scope.discovering = true;
        break;

      case "/profile/discover_answerers":
        $scope.discovering = true;
        break;

      case "/profile/view_profile":
        $scope.scheduling = true;
        break;

      case "/profile/my_profile":
        $scope.editing = true;
        break;

      default:
    }

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

    $scope.saveToQList = function(user){
      console.log(user);
      localStorage.setItem(user.name, user);
      console.log(localStorage.getItem(user.name));
    }
  })
  .directive('userVideo', function($sce) {
  	return {
  	  restrict: 'EA',
  	  scope: { video:'=' },
  	  replace: true,
  	  template: '<div><iframe style="overflow:hidden;" src="{{url}}" frameborder="0" allowfullscreen></iframe></div>',
  	  link: function (scope) {
  	      scope.$watch('video', function (newVal) {
  	         if (newVal) {
  	             scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + newVal + "?hd=1&rel=0&autohide=1&showinfo=0");
  	         }
  	      });
  	  }
  	};
  })
  .directive('buttonSwitch', function() {
    return {
      restrict: 'A',
        link: function(scope, element, attrs) {
            $(element).bootstrapSwitch();
        }
    }
  });