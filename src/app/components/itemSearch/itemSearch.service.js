(function() {
  'use strict';
  
  angular
    .module('searchify')
      .service('itemSearch', ['$http', function($http) {
        this.query = function(query, type) {
          var plan = $http({
            method: 'GET',
            url: 'https://api.spotify.com/v1/search?q=' + query + '&type=' + type
          });
          return plan;
        };
    }]);

})();
