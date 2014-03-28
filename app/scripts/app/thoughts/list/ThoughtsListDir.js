(function () {
	'use strict';

	angular.module('angularThoughtsApp').directive('fbThoughts', ['$routeParams', '$timeout', function ($routeParams, $timeout) {

		return {
			restrict: 'E',
			scope: {
				thoughts: '=ngModel'
			},
			link: function(scope, el, attr) {
				
				var activeClass, timer, thoughtId;

				//notifies mediator (ThoughtsCtrl)
				scope.selectThought = function(thought) {
					scope.$emit('SELECT_THOUGHT', thought);
				};

				var highlightItem = function() {

					thoughtId = $routeParams.thoughtId;
					
					timer = $timeout(function() {
						_.each(scope.thoughts, function(item) {
							activeClass = thoughtId === item.id ? 'active' : '';
							$(el).find('#'+item.id).addClass(activeClass);
						});
					});

				};

				highlightItem();

				//filter by tag if present
				scope.taggedBy = function(thought){
					if(!$routeParams.tag) { return true; }
					return (thought.tags.indexOf($routeParams.tag) > -1);
				};

				scope.$on('$destroy', function( event ) {
					$timeout.cancel(timer);
                });

			},
			templateUrl: 'scripts/app/thoughts/list/thoughtsList.html'
		};

	}]);
}());