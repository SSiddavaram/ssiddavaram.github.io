
var app = angular.module('app');
app.controller('postController', ['$scope', '$routeParams', 'blogService',
	function($scope, $routeParams, blogService) {
		$scope.getPostByID = function(){
			console.log('data : ',$routeParams);
 			blogService.getPostByID($routeParams.url).then(function(data){
 				console.log('data : ',data);
 				$scope.post = data;
 			});
		};
	}
]);