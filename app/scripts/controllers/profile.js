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
	"experiences": ["Cats", "Dogs"],
	"passions": ["Birds", "Balloons"],
  "image": "../images/Sam.jpg"
}

var sarahProfile = {
  "id": "sarah",
	"name": "Sarah",
	"video": "Mz9ZHGbq0f4",
	"question": "What is another question?",
	"experiences": ["Cats", "Dogs"],
	"passions": ["Birds", "Balloons"],
  "image": "../images/Sarah.jpg"
}

var vickyProfile = {
  "id": "vicky",
	"name": "Vicky",
	"video": "97LgGWhJphE",
	"question": "I'm running out of ideas.",
	"experiences": ["Cats", "Dogs"],
	"passions": ["Birds", "Balloons"],
  "image": "../images/Vicky.jpg"
}

var vinceProfile = {
	"id": "vince",
  "name": "Vince",
	"video": "vOJ9Rcmijh0",
	"question": "We can fill these in later.",
	"experiences": ["Cats", "Dogs"],
	"passions": ["Birds", "Balloons"],
  "image": "../images/Vince.jpg"
}

var myProfile = {
  "id": "",
  "name": "",
  "video": "",
  "question": "",
  "experiences": [],
  "passions": [],
  "image": ""
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
          list = 'q';
          break;

        case "/profile/discover_answerers":
          $scope.discovering = true;
          list = 'a';
          break;

        case "/profile/my_profile":
          $scope.editing = true;

          if (localStorage.getItem("myName") != null) {
            myProfile.name = localStorage.getItem("myName");
          }
          if (localStorage.getItem("myVideo") != null) {
            myProfile.video = localStorage.getItem("myVideo");
          }
          if (localStorage.getItem("myExperiences") != null) {
            myProfile.experiences = JSON.parse(localStorage["myExperiences"]);
          }
          if (localStorage.getItem("myPassions") != null) {
            myProfile.passions = JSON.parse(localStorage["myPassions"]);
          }
          if (localStorage.getItem("myImage") != null) {
            myProfile.image = localStorage.getItem("myImage");
          }

          profileList = [];
          profileList = [myProfile];
          break;
      }
    }

    $scope.profilenum = 0;

  	$scope.userProfile = profileList[$scope.profilenum];
  	$scope.video = $scope.userProfile.video;

    // This function moves the next profile forward and updates the video.
    $scope.profilePlus = function(){
  		$scope.profilenum = $scope.profilenum + 1;

  		if ($scope.profilenum >= profileList.length) {
  			$scope.profilenum = 0;
  		}

  		$scope.userProfile = profileList[$scope.profilenum];
  		$scope.video = $scope.userProfile.video;
  	}

    // Lists for the questions and answers.
    $scope.qalist = qalist;

    // Determines which list to save to.
    $scope.saveToList = function(user){
      localStorage.setItem(user.name, user);
      if (list == 'q') {
        $scope.qalist.questionMatches.push(user);
        console.log($scope.qalist.questionMatches);
      } else if (list == 'a') {
        $scope.qalist.answerMatches.push(user);
      }
    }

    // Default editing mode.
    $scope.editing_on = false;
    $scope.editing_text = "Off";
    this.editName = "";
    this.editVideo = "";

    $scope.editingMode = function(){
      if ($scope.editing_text == "Off") {
        $scope.editing_text = "On";
        $scope.editing_on = true;
      } else {
        $scope.editing_text = "Off";
        $scope.editing_on = false;

        if ($scope.profileCtrl.editVideo.length > 0) {
          $scope.userProfile.video = $scope.profileCtrl.editVideo;
          $scope.video = $scope.userProfile.video;
          localStorage.setItem("myVideo", $scope.profileCtrl.editVideo);
        }

        if ($scope.profileCtrl.editName.length > 0) {
          $scope.userProfile.name = $scope.profileCtrl.editName;
          localStorage.setItem("myName", $scope.profileCtrl.editName);
        }        
      }
    }

    $scope.addToInfo = function (detailList){
      switch (detailList) {
        case 'experience':
          $scope.userProfile.experiences.push($scope.profileCtrl.editExperience);
          localStorage.setItem("myExperiences", JSON.stringify($scope.userProfile.experiences));
          break;
        case "passion":
          $scope.userProfile.passions.push($scope.profileCtrl.editPassion);
          localStorage.setItem("myPassions", JSON.stringify($scope.userProfile.passions));
          break;
      }
    }

    $scope.removeInfo = function (detailList, index) {
       $scope.userProfile[detailList].splice(index, 1);
       localStorage.setItem("myExperiences", JSON.stringify($scope.userProfile.experiences));
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

angular.module('mavenAngularApp')
  .service('qalist', function() {
    this.profileList = profileList;
    this.questionMatches = [];
    this.answerMatches =[];
  });