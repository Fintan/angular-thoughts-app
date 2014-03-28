(function () {
	'use strict';

	function MenuCtrl($scope, $log, $location) {

		$scope.menuItems = [
			{ label: 'Thoughts', route: '/thoughts'},
			{ label: 'Tags', route: '/tags'}
		];

		$scope.$on('$routeChangeStart', function(next, current) { 
			
			var location = $location.url();
			
			if(location !== '/') {
				_.each($scope.menuItems, function(item) {
					item.activeClass = location.indexOf(item.route) > -1 ? 'active' : '';
				});
			}

		});
		
	}

	angular.module('angularThoughtsApp').controller('MenuCtrl', ['$scope', '$log', '$location', MenuCtrl]);

}());