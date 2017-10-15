angular.module('Quiz_angular.controllers', [])
.controller('loginController', function($scope){
	$scope.loginDisplay = true;
	$scope.loginOps = function(req){
		console.log(req);
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

		$scope.studentss = [];
		
		$scope.students = [
		  {firstName:'Jimi', lastName:'Scotts', email:'jimi@xyz.com'},
		  {firstName:'Paul', lastName:'Adam', email:'paul.a@xyz.com'},
		  {firstName:'Peter', lastName:'England', email:'peter@xyz.com'},
		  {firstName:'Rechard', lastName:'Jeff', email:'reachardjeff@xyz.com'}
		];
})
