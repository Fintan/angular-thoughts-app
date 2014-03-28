(function () {
	'use strict';

	angular.module('angularThoughtsApp').factory('ThoughtsService', ['localStorageService', '$rootScope', function (localStorageService, $rootScope) {

		var thoughts = angular.fromJson(localStorageService.get('thoughtsService')) || [
			{
				id: '123',
				title: 'Manchester United troubles \'affect Premier League brand\'',
				description: 'definately a title from the BBC website',
				tags: 'football,manu'
			},
			{
				id: '456',
				title: 'Liverpool boss says Man City still title favourites',
				description: 'I agree but hopefully not!',
				tags: 'football,mancity,liverpool'
			}
		];

		//http://stackoverflow.com/questions/18247130/how-to-store-the-data-to-local-storage
		var service = {
			thoughts: thoughts,
			getItem: function(index) { return thoughts[index]; },	
			addItem: function(item) { 
				thoughts.push(_.extend(item, {id:_.guid()})); 
				return thoughts[thoughts.length-1];
			},
			removeItem: function(item) { thoughts.splice(thoughts.indexOf(item), 1) },
			size: function() { return thoughts.length; },

			saveState: function () {
				localStorageService.add('thoughtsService', angular.toJson(thoughts));
			}
		};

		$rootScope.$on('SAVE_THOUGHTS', service.saveState);

		//http://veerasundar.com/blog/2013/01/underscore-js-and-guid-function/
		_.mixin({
			guid : function(){
				return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
					var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
					return v.toString(16);
				});
        	}
		});

		return service;

	}]);
}());