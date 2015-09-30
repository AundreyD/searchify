(function() {
  'use strict';

  angular
    .module('searchify')
    .controller('MainController', ['albumSearch', MainController]);
  

  /** @ngInject */
  function MainController(albumSearch) {
    var vm = this;

    vm.albums = [];

    getAlbumSearch();

    function getAlbumSearch() {
      vm.albums = albumSearch.getAlbums();
    }
  }

})();
