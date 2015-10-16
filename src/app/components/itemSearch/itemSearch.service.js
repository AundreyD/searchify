(function() {
  'use strict';
  
  angular
    .module('searchify')
    .service('itemSearch', ['$http', function($http) {

      this.getItem = function(query, type) {
        var plan = $http({
          method: 'GET',
          url: 'https://api.spotify.com/v1/search?q=' + query + '&type=' + type
        });
        return plan;
      };

      this.getNext = function(next) {
        var plan = $http({
          method: 'GET',
          url: next
        });
        return plan;
      };
    }]);

})();
