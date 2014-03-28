'use strict';

angular.module('angularThoughtsApp', [
	'ngRoute',
	'LocalStorageModule'
])
.config(function ($routeProvider) {
	$routeProvider
		.when('/thoughts', {
			templateUrl: 'scripts/app/thoughts/thoughts.html',
			controller: 'ThoughtsCtrl'
		})
		.when('/thoughts/tag/:tag', {
			templateUrl: 'scripts/app/thoughts/thoughts.html',
			controller: 'ThoughtsCtrl'
		})
		.when('/thoughts/:thoughtId', {
			templateUrl: 'scripts/app/thoughts/thoughts.html',
			controller: 'ThoughtsCtrl'
		})
		.when('/userinfo', {
			templateUrl: 'scripts/app/userinfo/userinfo.html',
			controller: 'UserInfoCtrl'
		})
		.when('/tags', {
			templateUrl: 'scripts/app/thoughts/tags/tags.html',
			controller: 'TagsCtrl'
		})
		.otherwise({
			redirectTo: '/thoughts'
		});
});