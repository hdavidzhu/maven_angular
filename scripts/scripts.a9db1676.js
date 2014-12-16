(function(){var a=[].slice;!function(b,c){"use strict";var d;return d=function(){function a(a,c){null==c&&(c={}),this.$element=b(a),this.options=b.extend({},b.fn.bootstrapSwitch.defaults,{state:this.$element.is(":checked"),size:this.$element.data("size"),animate:this.$element.data("animate"),disabled:this.$element.is(":disabled"),readonly:this.$element.is("[readonly]"),indeterminate:this.$element.data("indeterminate"),inverse:this.$element.data("inverse"),radioAllOff:this.$element.data("radio-all-off"),onColor:this.$element.data("on-color"),offColor:this.$element.data("off-color"),onText:this.$element.data("on-text"),offText:this.$element.data("off-text"),labelText:this.$element.data("label-text"),handleWidth:this.$element.data("handle-width"),labelWidth:this.$element.data("label-width"),baseClass:this.$element.data("base-class"),wrapperClass:this.$element.data("wrapper-class")},c),this.$wrapper=b("<div>",{"class":function(a){return function(){var b;return b=[""+a.options.baseClass].concat(a._getClasses(a.options.wrapperClass)),b.push(a.options.state?""+a.options.baseClass+"-on":""+a.options.baseClass+"-off"),null!=a.options.size&&b.push(""+a.options.baseClass+"-"+a.options.size),a.options.disabled&&b.push(""+a.options.baseClass+"-disabled"),a.options.readonly&&b.push(""+a.options.baseClass+"-readonly"),a.options.indeterminate&&b.push(""+a.options.baseClass+"-indeterminate"),a.options.inverse&&b.push(""+a.options.baseClass+"-inverse"),a.$element.attr("id")&&b.push(""+a.options.baseClass+"-id-"+a.$element.attr("id")),b.join(" ")}}(this)()}),this.$container=b("<div>",{"class":""+this.options.baseClass+"-container"}),this.$on=b("<span>",{html:this.options.onText,"class":""+this.options.baseClass+"-handle-on "+this.options.baseClass+"-"+this.options.onColor}),this.$off=b("<span>",{html:this.options.offText,"class":""+this.options.baseClass+"-handle-off "+this.options.baseClass+"-"+this.options.offColor}),this.$label=b("<span>",{html:this.options.labelText,"class":""+this.options.baseClass+"-label"}),this.$element.on("init.bootstrapSwitch",function(b){return function(){return b.options.onInit.apply(a,arguments)}}(this)),this.$element.on("switchChange.bootstrapSwitch",function(b){return function(){return b.options.onSwitchChange.apply(a,arguments)}}(this)),this.$container=this.$element.wrap(this.$container).parent(),this.$wrapper=this.$container.wrap(this.$wrapper).parent(),this.$element.before(this.options.inverse?this.$off:this.$on).before(this.$label).before(this.options.inverse?this.$on:this.$off),this.options.indeterminate&&this.$element.prop("indeterminate",!0),this._initWidth(),this._containerPosition(this.options.state,function(a){return function(){return a.options.animate?a.$wrapper.addClass(""+a.options.baseClass+"-animate"):void 0}}(this)),this._elementHandlers(),this._handleHandlers(),this._labelHandlers(),this._formHandler(),this._externalLabelHandler(),this.$element.trigger("init.bootstrapSwitch")}return a.prototype._constructor=a,a.prototype.state=function(a,b){return"undefined"==typeof a?this.options.state:this.options.disabled||this.options.readonly?this.$element:this.options.state&&!this.options.radioAllOff&&this.$element.is(":radio")?this.$element:(this.options.indeterminate?(this.indeterminate(!1),a=!0):a=!!a,this.$element.prop("checked",a).trigger("change.bootstrapSwitch",b),this.$element)},a.prototype.toggleState=function(a){return this.options.disabled||this.options.readonly?this.$element:this.options.indeterminate?(this.indeterminate(!1),this.state(!0)):this.$element.prop("checked",!this.options.state).trigger("change.bootstrapSwitch",a)},a.prototype.size=function(a){return"undefined"==typeof a?this.options.size:(null!=this.options.size&&this.$wrapper.removeClass(""+this.options.baseClass+"-"+this.options.size),a&&this.$wrapper.addClass(""+this.options.baseClass+"-"+a),this._width(),this.options.size=a,this.$element)},a.prototype.animate=function(a){return"undefined"==typeof a?this.options.animate:(a=!!a,a===this.options.animate?this.$element:this.toggleAnimate())},a.prototype.toggleAnimate=function(){return this.options.animate=!this.options.animate,this.$wrapper.toggleClass(""+this.options.baseClass+"-animate"),this.$element},a.prototype.disabled=function(a){return"undefined"==typeof a?this.options.disabled:(a=!!a,a===this.options.disabled?this.$element:this.toggleDisabled())},a.prototype.toggleDisabled=function(){return this.options.disabled=!this.options.disabled,this.$element.prop("disabled",this.options.disabled),this.$wrapper.toggleClass(""+this.options.baseClass+"-disabled"),this.$element},a.prototype.readonly=function(a){return"undefined"==typeof a?this.options.readonly:(a=!!a,a===this.options.readonly?this.$element:this.toggleReadonly())},a.prototype.toggleReadonly=function(){return this.options.readonly=!this.options.readonly,this.$element.prop("readonly",this.options.readonly),this.$wrapper.toggleClass(""+this.options.baseClass+"-readonly"),this.$element},a.prototype.indeterminate=function(a){return"undefined"==typeof a?this.options.indeterminate:(a=!!a,a===this.options.indeterminate?this.$element:this.toggleIndeterminate())},a.prototype.toggleIndeterminate=function(){return this.options.indeterminate=!this.options.indeterminate,this.$element.prop("indeterminate",this.options.indeterminate),this.$wrapper.toggleClass(""+this.options.baseClass+"-indeterminate"),this._containerPosition(),this.$element},a.prototype.inverse=function(a){return"undefined"==typeof a?this.options.inverse:(a=!!a,a===this.options.inverse?this.$element:this.toggleInverse())},a.prototype.toggleInverse=function(){var a,b;return this.$wrapper.toggleClass(""+this.options.baseClass+"-inverse"),b=this.$on.clone(!0),a=this.$off.clone(!0),this.$on.replaceWith(a),this.$off.replaceWith(b),this.$on=a,this.$off=b,this.options.inverse=!this.options.inverse,this.$element},a.prototype.onColor=function(a){var b;return b=this.options.onColor,"undefined"==typeof a?b:(null!=b&&this.$on.removeClass(""+this.options.baseClass+"-"+b),this.$on.addClass(""+this.options.baseClass+"-"+a),this.options.onColor=a,this.$element)},a.prototype.offColor=function(a){var b;return b=this.options.offColor,"undefined"==typeof a?b:(null!=b&&this.$off.removeClass(""+this.options.baseClass+"-"+b),this.$off.addClass(""+this.options.baseClass+"-"+a),this.options.offColor=a,this.$element)},a.prototype.onText=function(a){return"undefined"==typeof a?this.options.onText:(this.$on.html(a),this._width(),this._containerPosition(),this.options.onText=a,this.$element)},a.prototype.offText=function(a){return"undefined"==typeof a?this.options.offText:(this.$off.html(a),this._width(),this._containerPosition(),this.options.offText=a,this.$element)},a.prototype.labelText=function(a){return"undefined"==typeof a?this.options.labelText:(this.$label.html(a),this._width(),this.options.labelText=a,this.$element)},a.prototype.handleWidth=function(a){return"undefined"==typeof a?this.options.handleWidth:(this.options.handleWidth=a,this._width(),this._containerPosition(),this.$element)},a.prototype.labelWidth=function(a){return"undefined"==typeof a?this.options.labelWidth:(this.options.labelWidth=a,this._width(),this._containerPosition(),this.$element)},a.prototype.baseClass=function(){return this.options.baseClass},a.prototype.wrapperClass=function(a){return"undefined"==typeof a?this.options.wrapperClass:(a||(a=b.fn.bootstrapSwitch.defaults.wrapperClass),this.$wrapper.removeClass(this._getClasses(this.options.wrapperClass).join(" ")),this.$wrapper.addClass(this._getClasses(a).join(" ")),this.options.wrapperClass=a,this.$element)},a.prototype.radioAllOff=function(a){return"undefined"==typeof a?this.options.radioAllOff:(a=!!a,a===this.options.radioAllOff?this.$element:(this.options.radioAllOff=a,this.$element))},a.prototype.onInit=function(a){return"undefined"==typeof a?this.options.onInit:(a||(a=b.fn.bootstrapSwitch.defaults.onInit),this.options.onInit=a,this.$element)},a.prototype.onSwitchChange=function(a){return"undefined"==typeof a?this.options.onSwitchChange:(a||(a=b.fn.bootstrapSwitch.defaults.onSwitchChange),this.options.onSwitchChange=a,this.$element)},a.prototype.destroy=function(){var a;return a=this.$element.closest("form"),a.length&&a.off("reset.bootstrapSwitch").removeData("bootstrap-switch"),this.$container.children().not(this.$element).remove(),this.$element.unwrap().unwrap().off(".bootstrapSwitch").removeData("bootstrap-switch"),this.$element},a.prototype._width=function(){var a,b;return a=this.$on.add(this.$off),a.add(this.$label).css("width",""),b="auto"===this.options.handleWidth?Math.max(this.$on.width(),this.$off.width()):this.options.handleWidth,a.width(b),this.$label.width(function(a){return function(c,d){return"auto"!==a.options.labelWidth?a.options.labelWidth:b>d?b:d}}(this)),this._handleWidth=this.$on.outerWidth(),this._labelWidth=this.$label.outerWidth(),this.$container.width(2*this._handleWidth+this._labelWidth),this.$wrapper.width(this._handleWidth+this._labelWidth)},a.prototype._initWidth=function(){var a;return this.$wrapper.is(":visible")?this._width():a=c.setInterval(function(b){return function(){return b.$wrapper.is(":visible")?(b._width(),c.clearInterval(a)):void 0}}(this),50)},a.prototype._containerPosition=function(a,c){return null==a&&(a=this.options.state),this.$container.css("margin-left",function(b){return function(){var c;return c=[0,"-"+b._handleWidth+"px"],b.options.indeterminate?"-"+b._handleWidth/2+"px":a?b.options.inverse?c[1]:c[0]:b.options.inverse?c[0]:c[1]}}(this)),c?b.support.transition?this.$container.one("bsTransitionEnd",c).emulateTransitionEnd(500):c():void 0},a.prototype._elementHandlers=function(){return this.$element.on({"change.bootstrapSwitch":function(a){return function(c,d){var e;return c.preventDefault(),c.stopImmediatePropagation(),e=a.$element.is(":checked"),a._containerPosition(e),e!==a.options.state?(a.options.state=e,a.$wrapper.toggleClass(""+a.options.baseClass+"-off").toggleClass(""+a.options.baseClass+"-on"),d?void 0:(a.$element.is(":radio")&&b("[name='"+a.$element.attr("name")+"']").not(a.$element).prop("checked",!1).trigger("change.bootstrapSwitch",!0),a.$element.trigger("switchChange.bootstrapSwitch",[e]))):void 0}}(this),"focus.bootstrapSwitch":function(a){return function(b){return b.preventDefault(),a.$wrapper.addClass(""+a.options.baseClass+"-focused")}}(this),"blur.bootstrapSwitch":function(a){return function(b){return b.preventDefault(),a.$wrapper.removeClass(""+a.options.baseClass+"-focused")}}(this),"keydown.bootstrapSwitch":function(a){return function(b){if(b.which&&!a.options.disabled&&!a.options.readonly)switch(b.which){case 37:return b.preventDefault(),b.stopImmediatePropagation(),a.state(!1);case 39:return b.preventDefault(),b.stopImmediatePropagation(),a.state(!0)}}}(this)})},a.prototype._handleHandlers=function(){return this.$on.on("click.bootstrapSwitch",function(a){return function(){return a.state(!1),a.$element.trigger("focus.bootstrapSwitch")}}(this)),this.$off.on("click.bootstrapSwitch",function(a){return function(){return a.state(!0),a.$element.trigger("focus.bootstrapSwitch")}}(this))},a.prototype._labelHandlers=function(){return this.$label.on({"mousedown.bootstrapSwitch touchstart.bootstrapSwitch":function(a){return function(b){return a._dragStart||a.options.disabled||a.options.readonly?void 0:(b.preventDefault(),a._dragStart=(b.pageX||b.originalEvent.touches[0].pageX)-parseInt(a.$container.css("margin-left"),10),a.options.animate&&a.$wrapper.removeClass(""+a.options.baseClass+"-animate"),a.$element.trigger("focus.bootstrapSwitch"))}}(this),"mousemove.bootstrapSwitch touchmove.bootstrapSwitch":function(a){return function(b){var c;return null==a._dragStart||(b.preventDefault(),c=(b.pageX||b.originalEvent.touches[0].pageX)-a._dragStart,c<-a._handleWidth||c>0)?void 0:(a._dragEnd=c,a.$container.css("margin-left",""+a._dragEnd+"px"))}}(this),"mouseup.bootstrapSwitch touchend.bootstrapSwitch":function(a){return function(b){var c;return a._dragStart?(b.preventDefault(),a.options.animate&&a.$wrapper.addClass(""+a.options.baseClass+"-animate"),a._dragEnd?(c=a._dragEnd>-(a._handleWidth/2),a._dragEnd=!1,a.state(a.options.inverse?!c:c)):a.state(!a.options.state),a._dragStart=!1):void 0}}(this),"mouseleave.bootstrapSwitch":function(a){return function(){return a.$label.trigger("mouseup.bootstrapSwitch")}}(this)})},a.prototype._externalLabelHandler=function(){var a;return a=this.$element.closest("label"),a.on("click",function(b){return function(c){return c.preventDefault(),c.stopImmediatePropagation(),c.target===a[0]?b.toggleState():void 0}}(this))},a.prototype._formHandler=function(){var a;return a=this.$element.closest("form"),a.data("bootstrap-switch")?void 0:a.on("reset.bootstrapSwitch",function(){return c.setTimeout(function(){return a.find("input").filter(function(){return b(this).data("bootstrap-switch")}).each(function(){return b(this).bootstrapSwitch("state",this.checked)})},1)}).data("bootstrap-switch",!0)},a.prototype._getClasses=function(a){var c,d,e,f;if(!b.isArray(a))return[""+this.options.baseClass+"-"+a];for(d=[],e=0,f=a.length;f>e;e++)c=a[e],d.push(""+this.options.baseClass+"-"+c);return d},a}(),b.fn.bootstrapSwitch=function(){var c,e,f;return e=arguments[0],c=2<=arguments.length?a.call(arguments,1):[],f=this,this.each(function(){var a,g;return a=b(this),g=a.data("bootstrap-switch"),g||a.data("bootstrap-switch",g=new d(this,e)),"string"==typeof e?f=g[e].apply(g,c):void 0}),f},b.fn.bootstrapSwitch.Constructor=d,b.fn.bootstrapSwitch.defaults={state:!0,size:null,animate:!0,disabled:!1,readonly:!1,indeterminate:!1,inverse:!1,radioAllOff:!1,onColor:"primary",offColor:"default",onText:"ON",offText:"OFF",labelText:"&nbsp;",handleWidth:"auto",labelWidth:"auto",baseClass:"bootstrap-switch",wrapperClass:"wrapper",onInit:function(){},onSwitchChange:function(){}}}(window.jQuery,window)}).call(this),angular.module("mavenAngularApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/intro",{templateUrl:"views/intro.html",controller:"IntroCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/",{templateUrl:"views/q_a.html",controller:"ProfileCtrl"}).when("/profile",{templateUrl:"views/profile.html",controller:"ProfileCtrl"}).when("/profile/my_profile",{templateUrl:"views/profile.html",controller:"ProfileCtrl"}).when("/profile/discover_questioners",{templateUrl:"views/profile.html",controller:"ProfileCtrl"}).when("/profile/discover_answerers",{templateUrl:"views/profile.html",controller:"ProfileCtrl"}).when("/profile/view_profile",{templateUrl:"views/profile.html",controller:"ProfileCtrl"}).when("/profile/person/:person_id",{templateUrl:"views/profile.html",controller:"ProfileCtrl"}).when("/ask",{templateUrl:"views/qa_homepage.html",controller:"QACtrl"}).when("/answer",{templateUrl:"views/qa_homepage.html",controller:"QACtrl"}).otherwise({redirectTo:"/"})}]),angular.module("mavenAngularApp").controller("ToolbarCtrl",["$scope","qalist",function(a,b){a.total_matches=b.questionMatches.length+b.answerMatches.length,a.questionMatches=b.questionMatches.length,a.answerMatches=b.answerMatches.length}]),angular.module("mavenAngularApp").controller("IntroCtrl",["$scope",function(){}]),angular.module("mavenAngularApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("mavenAngularApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);var samProfile={id:"sam",name:"Sam",video:"gefPe38yo9g",question:"What is my question?",experiences:["Bioengineering - Tufts University, Junior","Research Assistant MIT Bio Lab Summer 2014"],passions:["Theater Tech","Lighting Design","Playing the Guitar"],image:"../images/Sam.jpg",email:"sam@gmail.com",know:["Bio","College applications","Research positions"],curious:["Music","Design","Postgrad Life"]},sarahProfile={id:"sarah",name:"Sarah",video:"Mz9ZHGbq0f4",question:"How can I use graphic design in a meaningful way?",experiences:["Artist at Computer Fine Arts 2014-Present (6 months)","Art Intern at Zerooone Summer 2013","Graduated NYU Spring 2014"],passions:["Puzzles","Illustration","SciFi Movies"],image:"../images/Sarah.jpg",email:"sarah@gmail.com",know:["Art","Typography","Design school"],curious:["Science","Post-grad life"]},vickyProfile={id:"vicky",name:"Vicky",video:"97LgGWhJphE",question:"What's the best lesson you've ever learned from your parents?",experiences:["20 years Deloitte Consulting LLP","5 years McKinney & Company","Computer Sales Person 2 years"],passions:["Gender Equity","Swimming","Family"],image:"../images/Vicky.jpg",email:"vicky@gmail.com",know:["Finance","Career Development"],curious:["Machine Learning","Alternative energy","New technology"]},vinceProfile={id:"vince",name:"Vince",video:"vOJ9Rcmijh0",question:"How can I integrate my passion for photography into my everyday life?",experiences:["Teaching math at Austin Community College 10 years","Business Analyst at Wells Fargo 5 years"],passions:["Photography","Education","Family","Gardening","Texas BBQ"],image:"../images/Vince.jpg",email:"vince@gmail.com",know:["Teaching","Business"],curious:["HDR","Selfies","Birds","Home cooking"]},myProfile={id:"",name:"(Enter Name Here)",video:"(Enter video link from Youtube here)",question:"(What is your question?)",experiences:["(Enter some experiences here.)"],passions:["(Enter some passions here.)"],image:"",email:"",know:["(What do you know a lot about?)"],curious:["(What are you curious about?)"]},profileList=[],questionMatches=[],answerMatches=[];angular.module("mavenAngularApp").controller("ProfileCtrl",["$scope","$sce","$location","qalist",function(a,b,c,d){function e(a){for(var b,c,d=a.length;d;b=Math.floor(Math.random()*d),c=a[--d],a[d]=a[b],a[b]=c);return a}profileList=[samProfile,sarahProfile,vickyProfile,vinceProfile],profileList=e(profileList);var f,g=c.path();if(g.indexOf("/profile/person/")>-1){for(var h=g.substr(16),i=0;i<profileList.length;i++)if(h==profileList[i].id){var j=profileList[i];profileList=[],profileList.push(j)}a.scheduling=!0}else switch(g){case"/profile/discover_questioners":a.question_show=!0,a.discovering=!0,f="a";break;case"/profile/discover_answerers":a.discovering=!0,f="q";break;case"/profile/my_profile":a.editing=!0,null!=localStorage.getItem("myName")&&(myProfile.name=localStorage.getItem("myName")),null!=localStorage.getItem("myVideo")&&(myProfile.video=localStorage.getItem("myVideo")),null!=localStorage.getItem("myExperiences")&&(myProfile.experiences=JSON.parse(localStorage.myExperiences)),null!=localStorage.getItem("myPassions")&&(myProfile.passions=JSON.parse(localStorage.myPassions)),null!=localStorage.getItem("myImage")&&(myProfile.image=localStorage.getItem("myImage")),null!=localStorage.getItem("myKnowledge")&&(myProfile.know=JSON.parse(localStorage.myKnowledge)),null!=localStorage.getItem("myCuriousities")&&(myProfile.curious=JSON.parse(localStorage.myCuriousities)),profileList=[],profileList=[myProfile]}a.profilenum=0,a.userProfile=profileList[a.profilenum],a.video=a.userProfile.video,a.profilePlus=function(){a.profilenum=a.profilenum+1,a.profilenum>=profileList.length&&(a.profilenum=0),a.userProfile=profileList[a.profilenum],a.video=a.userProfile.video},a.qalist=d,a.saveToList=function(b){localStorage.setItem(b.name,b),"q"==f?a.qalist.questionMatches.push(b):"a"==f&&a.qalist.answerMatches.push(b)},a.editing_on=!1,a.editing_text="Off",this.editName="",this.editVideo="",a.editingMode=function(){"Off"==a.editing_text?(a.editing_text="On",a.editing_on=!0):(a.editing_text="Off",a.editing_on=!1,a.profileCtrl.editVideo.length>0&&(a.userProfile.video=a.profileCtrl.editVideo,a.video=a.userProfile.video,localStorage.setItem("myVideo",a.profileCtrl.editVideo)),a.profileCtrl.editName.length>0&&(a.userProfile.name=a.profileCtrl.editName,localStorage.setItem("myName",a.profileCtrl.editName)))},a.addToInfo=function(b){switch(b){case"experiences":a.userProfile.experiences.push(a.profileCtrl.editExperience),localStorage.setItem("myExperiences",JSON.stringify(a.userProfile.experiences));break;case"passions":a.userProfile.passions.push(a.profileCtrl.editPassion),localStorage.setItem("myPassions",JSON.stringify(a.userProfile.passions));break;case"know":a.userProfile.know.push(a.profileCtrl.editKnowledge),localStorage.setItem("myKnowledge",JSON.stringify(a.userProfile.know));break;case"curious":a.userProfile.curious.push(a.profileCtrl.editCuriousity),localStorage.setItem("myCuriousities",JSON.stringify(a.userProfile.curious))}},a.removeInfo=function(b,c){a.userProfile[b].splice(c,1);var d;switch(b){case"know":d="myKnowledge";break;case"curious":d="myCuriousities";break;case"experiences":d="myExperiences";break;case"passions":d="myPassions"}localStorage.setItem(d,JSON.stringify(a.userProfile[b]))}}]).directive("userVideo",["$sce",function(a){return{restrict:"EA",scope:{video:"="},replace:!0,template:'<div><iframe style="overflow:hidden;" src="{{url}}" frameborder="0" allowfullscreen></iframe></div>',link:function(b){b.$watch("video",function(c){c&&(b.url=a.trustAsResourceUrl("http://www.youtube.com/embed/"+c+"?hd=1&rel=0&autohide=1&showinfo=0"))})}}}]).directive("modalDialog",function(){return{restrict:"E",scope:{show:"="},replace:!0,transclude:!0,link:function(a,b,c){a.dialogStyle={},c.width&&(a.dialogStyle.width=c.width),c.height&&(a.dialogStyle.height=c.height),a.hideModal=function(){a.show=!1}},template:"<div class='ng-modal' ng-show='show'><div class='ng-modal-overlay' ng-click='hideModal()'></div><div class='ng-modal-dialog' ng-style='dialogStyle'><div class='ng-modal-close' ng-click='hideModal()'>X</div><div class='ng-modal-dialog-content' ng-transclude></div></div></div>"}}),angular.module("mavenAngularApp").controller("ModalCtrl",["$scope",function(a){a.modalShown=!1,a.toggleModal=function(){a.modalShown=!a.modalShown}}]),angular.module("mavenAngularApp").service("qalist",function(){this.profileList=profileList,this.questionMatches=[],this.answerMatches=[]}),angular.module("mavenAngularApp").controller("QACtrl",["$scope","$location","qalist",function(a,b,c){var d=b.path();a.displayList=[],a.question=null==localStorage.getItem("question")?"What is it like to be a woman in tech?":localStorage.getItem("question");var e=function(b){a.qalist=c,"/ask"==b?(a.displayList=a.qalist.questionMatches,0!=a.qalist.questionMatches.length&&(a.myAskMatches=!0)):"/answer"==b&&(a.displayList=a.qalist.answerMatches,0!=a.qalist.answerMatches.length&&(a.myAnswerMatches=!0))};switch(a.goToProfile=function(a){b.host();b.path("/profile/person/"+a)},a.saveQuestion=function(){a.question!=localStorage.getItem("question")&&(localStorage.setItem("question",a.question),c.questionMatches=[]),a.question.length>0?b.path("/profile/discover_answerers"):alert("Put in question please!")},d){case"/ask":a.q_form_show=!0,e(d);break;case"/answer":a.a_form_show=!0,e(d)}}]);