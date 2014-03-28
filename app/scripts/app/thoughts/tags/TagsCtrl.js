(function () {
	'use strict';

	function TagsCtrl($scope, $log, TagsService) {

		$scope.tags = TagsService.tags;

	}

	angular.module('angularThoughtsApp').controller('TagsCtrl', ['$scope', '$log', 'TagsService', TagsCtrl]);

}());