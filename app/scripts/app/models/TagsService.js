(function () {
	'use strict';

	angular.module('angularThoughtsApp').factory('TagsService', ['localStorageService', '$rootScope', function (localStorageService, $rootScope) {

		var tags = angular.fromJson(localStorageService.get('tagsService')) || [
			{ label:'football', thoughtIds:['123', '456'] },
			{ label:'manu', thoughtIds:['123'] },
			{ label:'mancity', thoughtIds:['456'] },
			{ label:'liverpool', thoughtIds:['456'] }
		];

		//http://stackoverflow.com/questions/18247130/how-to-store-the-data-to-local-storage
		var service = {
			tags: tags,
			getItem: function(index) { return tags[index]; },	
			addItem: function(item) { 
				var tag = _.findWhere(tags, { label: item.label });
				if(tag) {
					if(!item.thoughtIds) {return tag;}
					//update existing tag
					tag.thoughtIds.push(item.thoughtIds[0]);
					tag.thoughtIds = _.unique(tag.thoughtIds);

				}else {
					//create new
					tags.push(item); 
					tag = tags[tags.length-1];

				}
				return tag;
			},
			removeItem: function(item) { tags.splice(tags.indexOf(item), 1) },
			size: function() { return tags.length; },
			saveState: function () {
				localStorageService.add('tagsService', angular.toJson(tags));
			}
		};

		$rootScope.$on('SAVE_TAGS', service.saveState);

		return service;

	}]);
}());