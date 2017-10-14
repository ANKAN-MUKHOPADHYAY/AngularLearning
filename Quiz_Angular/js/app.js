angular.module('Quiz_angular', ['ui.router','Quiz_angular.controllers'])
.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('login');	
		
	
	$stateProvider
		.state('login',{
			url: '/login',
			templateUrl : 'pages/login.html',
			controller : 'loginController'
		})
});