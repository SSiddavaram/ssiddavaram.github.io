'use strict';

var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider',function($routeProvider) {

	$routeProvider.when('/',{
				templateUrl:'/src/templates/home.html'
			});
		/*.when('/blog',{
			templateUrl:path+'view/blog.html'*/ 
}]);