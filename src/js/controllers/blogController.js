
var app = angular.module('app');
app.controller('blogController', ['$scope', 'blogService',
	function($scope, blogService) {
		$scope.getPosts = function(){
			console.log('blogService ');
 			$scope.posts = blogService.getPosts();
		};

		$scope.sendMail = function() {
    var link = "mailto:me@example.com"
             + "?cc=myCCaddress@example.com"
             + "&subject=" + escape("This is my subject")
             + "&body=" + escape(document.getElementById('myText').value)
    ;

    window.location.href = link;
}
	}
]);