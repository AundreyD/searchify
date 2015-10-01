(function() {
  'use strict';

  angular
    .module('searchify')
    .controller('MainController', ['albumSearch', MainController]);
  

  /** @ngInject */
  function MainController(albumSearch) {
    var vm = this;

    vm.albumList = [];

    getAlbumSearch();

    function getAlbumSearch() {
      vm.albumList = albumSearch.get(function(response) {
        return response.albums.items;
      });
    }
  }
})();
