
var app = angular.module('app');
app.factory('blogService', ['$http', '$q',
	function($http,$q) {
		var posts = [{'postId': 1, 'title' : 'Alphabet', 'postUrl' : 'alphabet.html'},
					 {'postId': 2, 'title' : 'Cross Domain Ajax Request', 'postUrl' : 'cross-domain-ajax-request.html'},
					 {'postId': 3, 'title' : 'Abdul Kalam About Dreams', 'postUrl' : 'apj.html'},
					 {'postId': 4, 'title' : 'My First Post', 'postUrl' : 'first-post.html'}];
		var blogService = {
			getPosts: function(){
 				return posts;
			},

			getPostByID: function(id){
				var deferred = $q.defer();
				var postFound = false;
				var postObj;
				angular.forEach(posts, function(post){
					if(!postFound){
						if(post.postUrl == id){
							postFound = true;
							postObj = post;
						}
					}	
				});
				deferred.resolve(postObj);
				return deferred.promise;
			}
		};		
		return blogService;
	}
]);