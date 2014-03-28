(function () {
	'use strict';
	/**
	*
	*	ThoughtsCtrl acts as a mediator for List and Detail views
	*
	**/
	function ThoughtsCtrl($scope, $log, $location, $routeParams, $timeout, ThoughtsService, TagsService) {

		//model
		$scope.thoughts = ThoughtsService.thoughts;

		//addBtn click handler
		$scope.addThought = function() {
			
			var thought = ThoughtsService.addItem({
				title: 'Here\'s another thought',
				description: 'Details of my other thought..',
				tags: ''
			});

			$location.path( '/thoughts/' + thought.id );

		};

		//determines visibility
		$scope.thoughtIsSelected = function() {
			
			return $scope.currentThought ? true : false;

		};

		$scope.removeFilter = function() {
			
			//removing url param value will trigger $routeChangeSuccess event
			$location.search('tag', null);

		};

		//emitted from list
		$scope.$on('SELECT_THOUGHT', function(event, thought){
			
			event.stopPropagation();
			$location.path( '/thoughts/' + thought.id );

		});

		//emitted from detail
		$scope.$on('DELETE_THOUGHT', function(event, thought){
			
			event.stopPropagation();
			
			thought.tags = '';
			purgeTagsService(thought);
			$scope.$emit('SAVE_TAGS');
			
			ThoughtsService.removeItem(thought);
			$scope.$emit('SAVE_THOUGHTS');
			
			$location.path( '/thoughts');

		});

		//emitted from detail
		$scope.$on('SAVE_THOUGHT', function(event, thought){
			
			event.stopPropagation();
			$scope.$emit('SAVE_THOUGHTS');
			updateTags(thought);

		});

		var updateTags = function(thought) {

			purgeTagsService(thought);
			saveTags(thought);
			$scope.$emit('SAVE_TAGS');

		};

		//remove thought.id from any disassociated tags
		var purgeTagsService = function(thought) {

			_.each(TagsService.tags, function(tag) {
				if(_.contains(tag.thoughtIds, thought.id) && thought.tags.indexOf(tag.label) === -1) {
					tag.thoughtIds.splice(tag.thoughtIds.indexOf(thought.id), 1);
				}
			});

		};

		//add or update tags service with how this thought is tagged
		var saveTags = function(thought) {
			
			if(thought.tags.length === 0) { return; }

			var thoughtTags = thought.tags.split(',');
			
			_.each(thoughtTags, function(label) {
				var tag = TagsService.addItem({ label: label, thoughtIds: [thought.id] });
			});

		};

		$scope.$on('$routeChangeSuccess', function(next, current) { 
			
			event.stopPropagation();
			
			//for setting as model of detail directive if present
			if($routeParams.thoughtId) {
				$scope.currentThought = _.findWhere($scope.thoughts, {id: $routeParams.thoughtId});
			}else {
				$scope.currentThought = void 0;
			}

			//for displaying the current filter (tag) if present
			if($routeParams.tag) {
				$scope.tag = $routeParams.tag;
			}else {
				$scope.tag = void 0;
			}

		});

	}

	angular.module('angularThoughtsApp').controller('ThoughtsCtrl', ['$scope', '$log', '$location', '$routeParams', '$timeout', 'ThoughtsService', 'TagsService', ThoughtsCtrl]);

}());