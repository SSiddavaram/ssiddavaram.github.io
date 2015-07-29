'use strict';

var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider',function($routeProvider) {

	var path = '/src';
	$routeProvider.when('/',{
			templateUrl: path+'/templates/home.html'
		})
		.when('/Home',{
			templateUrl: path+'/templates/home.html'
		}); 
}]);