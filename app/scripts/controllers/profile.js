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
  "image": "../images/Sam.jpg",
  "email": "sam@gmail.com",
  "know": ["Bio", "College applications", "Research positions"],
  "curious": ["Music", "Design", "Postgrad Life"],
}

var sarahProfile = {
  "id": "sarah",
	"name": "Sarah",
	"video": "Mz9ZHGbq0f4",
	"question": "How can I use graphic design in a meaningful way?",
	"experiences": ["Artist at Computer Fine Arts 2014-Present (6 months)", "Art Intern at Zerooone Summer 2013", "Graduated NYU Spring 2014"],
	"passions": ["Puzzles", "Illustration", "SciFi Movies"],
  "image": "../images/Sarah.jpg",
  "email": "sarah@gmail.com",
  "know": ["Art", "Typography", "Design school"],
  "curious": ["Science", "Post-grad life"],
}

var vickyProfile = {
  "id": "vicky",
	"name": "Vicky",
	"video": "97LgGWhJphE",
	"question": "What's the best lesson you've ever learned from your parents?",
	"experiences": ["20 years Deloitte Consulting LLP", "5 years McKinney & Company", "Computer Sales Person 2 years"],
	"passions": ["Gender Equity", "Swimming", "Family"],
  "image": "../images/Vicky.jpg",
  "email": "vicky@gmail.com",
  "know": ["Finance", "Career Development"],
  "curious": ["Machine Learning", "Alternative energy", "New technology"],
}

var vinceProfile = {
	"id": "vince",
  "name": "Vince",
	"video": "vOJ9Rcmijh0",
	"question": "How can I integrate my passion for photography into my everyday life?",
	"experiences": ["Teaching math at Austin Community College 10 years", "Business Analyst at Wells Fargo 5 years"],
	"passions": ["Photography", "Education", "Family", "Gardening", "Texas BBQ"],
  "image": "../images/Vince.jpg",
  "email": "vince@gmail.com",
  "know": ["Teaching", "Business"],
  "curious": ["HDR", "Selfies", "Birds", "Home cooking"],
}

var myProfile = {
  "id": "",
  "name": "(Enter Name Here)",
  "video": "(Enter video link from Youtube here)",
  "question": "(What is your question?)",
  "experiences": ["(Enter some experiences here.)"],
  "passions": ["(Enter some passions here.)"],
  "image": "",
  "email": "",
  "know": ["(What do you know a lot about?)"],
  "curious": ["(What are you curious about?)"],
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
          if (localStorage.getItem("myKnowledge") != null) {
            myProfile.know = JSON.parse(localStorage["myKnowledge"]);
          }
          if (localStorage.getItem("myCuriousities") != null) {
            myProfile.curious = JSON.parse(localStorage["myCuriousities"]);
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
        case 'experiences':
          $scope.userProfile.experiences.push($scope.profileCtrl.editExperience);
          localStorage.setItem("myExperiences", JSON.stringify($scope.userProfile.experiences));
          break;
        case 'passions':
          $scope.userProfile.passions.push($scope.profileCtrl.editPassion);
          localStorage.setItem("myPassions", JSON.stringify($scope.userProfile.passions));
          break;
        case 'know':
          $scope.userProfile.know.push($scope.profileCtrl.editKnowledge);
          localStorage.setItem("myKnowledge", JSON.stringify($scope.userProfile.know));
          break;
        case 'curious':
          $scope.userProfile.curious.push($scope.profileCtrl.editCuriousity);
          localStorage.setItem("myCuriousities", JSON.stringify($scope.userProfile.curious));
          break;
      }
    }

    $scope.removeInfo = function (detailList, index) {
       $scope.userProfile[detailList].splice(index, 1);
       var localName;

       switch (detailList) {
        case "know":
          localName = "myKnowledge";
          break;
        case "curious":
          localName = "myCuriousities";
          break;
        case "experiences":
          localName = "myExperiences";
          break;
        case "passions":
          localName = "myPassions";
          break;
       }

       localStorage.setItem(localName, JSON.stringify($scope.userProfile[detailList]));
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
  .directive('modalDialog', function() {
    return {
      restrict: 'E',
      scope: {
        show: '='
      },
      replace: true, // Replace with the template below
      transclude: true, // we want to insert custom content inside the directive
      link: function(scope, element, attrs) {
        scope.dialogStyle = {};
        if (attrs.width)
          scope.dialogStyle.width = attrs.width;
        if (attrs.height)
          scope.dialogStyle.height = attrs.height;
        scope.hideModal = function() {
          scope.show = false;
        };
      },
      template: "<div class='ng-modal' ng-show='show'><div class='ng-modal-overlay' ng-click='hideModal()'></div><div class='ng-modal-dialog' ng-style='dialogStyle'><div class='ng-modal-close' ng-click='hideModal()'>X</div><div class='ng-modal-dialog-content' ng-transclude></div></div></div>"
    };
  });

angular.module('mavenAngularApp')
  .controller('ModalCtrl', ['$scope', function($scope) {
    $scope.modalShown = false;
    $scope.toggleModal = function() {
    $scope.modalShown = !$scope.modalShown;
    };
  }]);

angular.module('mavenAngularApp')
  .service('qalist', function() {
    this.profileList = profileList;
    this.questionMatches = [];
    this.answerMatches =[];
  });