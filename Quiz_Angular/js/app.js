angular.module('Quiz_angular', ['ui.router','Quiz_angular.controllers'])
.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('login');	
		
	
	$stateProvider
		.state('login',{
			url: '/login',
			templateUrl : 'pages/login.html',
			controller : 'loginController'
		})
		.state('signUpBlock',{
			url: '/signup',
			templateUrl : 'pages/signUp.html',
			controller : 'signupController'
		})
		.state('inbuildDir',{
			url: '/inbuild',
			templateUrl : 'pages/inbuild.html',
			controller : 'signupController'
		})
});