
var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider',function($routeProvider) {

	var path = '/src';
	$routeProvider.when('/',{
			templateUrl: path+'/templates/home.html'
		})
		.when('/Home',{
			templateUrl: path+'/templates/home.html'
		})
		.when('/About',{
			templateUrl: path+'/templates/about.html'
		})
		.when('/blog/posts/:url',{
			templateUrl: path+'/templates/post.html',
			controller: 'postController'
		})
		.otherwise({
        	redirectTo: '/'
      	}); 
}]);