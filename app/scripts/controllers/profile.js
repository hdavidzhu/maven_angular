'use strict';

/**
 * @ngdoc function
 * @name mavenAngularApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the mavenAngularApp
 */

var samProfile = {
  "id": "sam",
	"name": "Sam",
	"video": "gefPe38yo9g",
	"question": "What is my question?",
	"experiences": ["Bioengineering - Tufts University, Junior", "Research Assistant MIT Bio Lab Summer 2014"],
	"passions": ["Theater Tech", "Lighting Design", "Playing the Guitar"],
  "image": "../images/Sam.jpg"
}

var sarahProfile = {
  "id": "sarah",
	"name": "Sarah",
	"video": "Mz9ZHGbq0f4",
	"question": "How can I use graphic design in a meaningful way?",
	"experiences": ["Artist at Computer Fine Arts 2014-Present (6 months)", "Art Intern at Zerooone Summer 2013", "Graduated NYU Spring 2014"],
	"passions": ["Puzzles", "Illustration", "SciFi Movies"],
  "image": "../images/Sarah.jpg"
}

var vickyProfile = {
  "id": "vicky",
	"name": "Vicky",
	"video": "97LgGWhJphE",
	"question": "What's the best lesson you've ever learned from your parents?",
	"experiences": ["20 years Deloitte Consulting LLP", "5 years McKinney & Company", "Computer Sales Person 2 years"],
	"passions": ["Gender Equity", "Swimming", "Family"],
  "image": "../images/Vicky.jpg"
}

var vinceProfile = {
	"id": "vince",
  "name": "Vince",
	"video": "vOJ9Rcmijh0",
	"question": "How can I integrate my passion for photography into my everyday life?",
	"experiences": ["Teaching math at Austin Community College 10 years", "Business Analyst at Wells Fargo 5 years"],
	"passions": ["Photography", "Education", "Family", "Gardening", "Texas BBQ"],
  "image": "../images/Vince.jpg"
}

var profileList = [];
var questionMatches = [];
var answerMatches =[];

angular.module('mavenAngularApp')
  .controller('ProfileCtrl', function ($scope, $sce, $location, qalist) {

    // To help us keep the profile lists random.
    function shuffle(o){ //v1.0
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };

    profileList = [samProfile, sarahProfile, vickyProfile, vinceProfile];
    profileList = shuffle(profileList);

    var profile_mode = $location.path();
    var list;

    if (profile_mode.indexOf("/profile/person/") > -1) {
      var person_id = profile_mode.substr(16);

      // var chosenPerson = profileList[0];

      for (var i = 0; i < profileList.length; i++) {
        if (person_id == profileList[i].id) {
          var chosenPerson = profileList[i];
          profileList = [];
          profileList.push(chosenPerson);
        }
      }

      $scope.scheduling = true;
      
    } else {
      switch(profile_mode) {
        case "/profile/discover_questioners":
          $scope.question_show = true;
          $scope.discovering = true;
          list = 'a';
          break;

        case "/profile/discover_answerers":
          $scope.discovering = true;
          list = 'q';
          break;

        case "/profile/my_profile":
          $scope.editing = true;
          break;

        default:
      }
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

    $scope.qalist = qalist;

    $scope.saveToList = function(user){
      localStorage.setItem(user.name, user);
      if (list == 'q') {
        $scope.qalist.questionMatches.push(user);
        console.log($scope.qalist.questionMatches);
      } else if (list == 'a') {
        $scope.qalist.answerMatches.push(user);
      }
    }

    $scope.editing_on = false;

    $scope.editingMode = function(){
      $scope.editing_on = !$scope.editing_on;
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

angular.module('mavenAngularApp')
  .service('qalist', function() {
    this.profileList = profileList;
    this.questionMatches = [];
    this.answerMatches =[];
  });