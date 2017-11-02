angular.module('Quiz_angular.services', [])

.factory('userOperations', function($http,$q){
    var services ={};
	services.register=function(data){
		console.log(data);
		return $http({
			method: 'POST',
			url: 'http://172.20.10.2:7000/ideology/register',
			data: data
		})
	},
	services.getUserDetails=function(a){
		console.log(a);
		return $http({
			method: 'POST',
			url: 'http://192.168.1.2:7000/ideology/getRegisteredUserDetails',
			data: a
		})
	}
	return services;         
});