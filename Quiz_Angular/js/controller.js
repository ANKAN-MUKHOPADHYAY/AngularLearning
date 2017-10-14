angular.module('Quiz_angular.controllers', [])
.controller('loginController', function($scope){
	$scope.loginOps = function(req){
		console.log(req);
	};
})
.controller('signupController', function($scope){
	$scope.signUpOps = function(req){
		console.log(req);
	};
})
