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

