
var app = angular.module('app');
app.controller('blogController', ['$scope', 'blogService',
	function($scope, blogService) {
		$scope.getPosts = function(){
			console.log('blogService ');
 			$scope.posts = blogService.getPosts();
		};
	}
]);