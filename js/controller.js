angular.module('Angular_Learning.controllers', [])
.controller('firstController', function(){
	alert('Wow');
})
.controller('secondController',function($scope){
	$scope.uname="Ankan Mukhopadhyay";
})