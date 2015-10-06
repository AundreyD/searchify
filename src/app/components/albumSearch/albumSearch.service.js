(function() {
  'use strict';

  angular
    .module('searchify')
      .service('albumSearch', ['$http', function($http) {
        this.query = function(query) {
          var plan = $http({
            method: 'GET',
            url: 'https://api.spotify.com/v1/search?q=' + query + '&type=album&type=artist'
          });
          return plan;
        };
  }]);

})();
