(function () {
	'use strict';

	angular.module('angularThoughtsApp').directive('fbThoughtDetail', function () {

		return {
			restrict: 'E',
			scope: {
				thought: '=ngModel'
			},
			link: function(scope, el){

				//notifies mediator (ThoughtsCtrl)
				scope.saveThought = function() {

					scope.$emit('SAVE_THOUGHT', scope.thought);

				};
				
				//notifies mediator (ThoughtsCtrl)
				scope.deleteThought = function() {
					
					scope.$emit('DELETE_THOUGHT', scope.thought);

				};

			},
			templateUrl: 'scripts/app/thoughts/detail/thoughtDetail.html'
		};

	});
}());