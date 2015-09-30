(function() {
  'use strict';

  angular
    .module('searchify')
    .factory('albumSearch', albumSearch, getAlbums);

  /** @ngInject */
  function albumSearch($resource) {
    return $resource('https://api.spotify.com/v1/search?q=nightlife&type=album');
  }

  function getAlbums() {
  	albumSearch.get(function(response) {
    	return response.albums.items;
    });
  }

})();
