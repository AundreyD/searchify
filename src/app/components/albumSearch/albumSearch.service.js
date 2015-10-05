(function() {
  'use strict';

  angular
    .module('searchify')
    .factory('albumSearch', albumSearch);

  /** @ngInject */
  function albumSearch($resource) {
    return $resource('https://api.spotify.com/v1/search?q=:qry' + '&type=album&type=artist',
    	{
    		qry: '@qry'
    	}, 
    	{
    		get: {
    			method: 'GET',
    			isArray: false
    		}
    	}
    );
  }

})();
