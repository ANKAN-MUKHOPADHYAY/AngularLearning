angular.module('Quiz_angular.controllers', [])
.controller('loginController', function($scope,$state){
	$scope.loginDisplay = true;
	$scope.loginOps = function(req){
		console.log(req);
		$state.go('homepath');
	};
	$scope.changeForm = function(a,b){
		$scope.loginDisplay = a;
		$scope.signUpDisplay = b;
	};

	$scope.signUpOps = function(reqe){
		console.log(reqe);
	};
})
.controller('signupController', function($scope){
		$scope.userName = 'Jimi Scotts';
		$scope.email = 'jimi.s@aol.com';
		$scope.password = '1234';

		
		$scope.students = [
		  {firstName:'Jimi', lastName:'Scotts', email:'jimi@xyz.com'},
		  {firstName:'Paul', lastName:'Adam', email:'paul.a@xyz.com'},
		  {firstName:'Peter', lastName:'England', email:'peter@xyz.com'},
		  {firstName:'Rechard', lastName:'Jeff', email:'reachardjeff@xyz.com'}
		];
})
.controller('homeController', function($scope){
	$scope.courses = [{
		"courseImg": "http://rathankalluri.com/wp-content/uploads/2017/04/Angular-js-768x575.jpg",
		"courseDispName": "Angular JS Foundation",
		"courseSubHeading": "Basics and Advance Questions for AngularJS",
		"courseId": "TECHUV0007",
		"courseDBName": "angularquestionset",
		"courseDesc": "",
		"courseColor": "#C93756"
	},{
		"courseImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
		"courseDispName": "JavaScript Object Oriented",
		"courseSubHeading": "Chit chats of JavaScript",
		"courseId": "TECHUV0013",
		"courseDBName": "javascriptquestionset",
		"courseDesc": "",
		"courseColor": "#03C9A9"
	},{
		"courseImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/AJAX_logo_by_gengns.svg/2000px-AJAX_logo_by_gengns.svg.png",
		"courseDispName": "Ajax Programming",
		"courseSubHeading": "Process to communicate",
		"courseId": "TECHUV0010",
		"courseDBName": "ajaxquestionset",
		"courseDesc": "",
		"courseColor": "#F89406"
	}];

	$scope.questions = function(){
		console.log('I am Here');
	};
})
