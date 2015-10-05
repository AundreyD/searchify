(function() {
  'use strict';

  angular
    .module('searchify')
    .controller('MainController', ['albumSearch', MainController]);
  

  /** @ngInject */
  function MainController(albumSearch) {
    var vm = this;

    vm.searchIn = {
      q: ''
    };
    vm.albumList = [];

    getAlbumSearch();

    function getAlbumSearch() {
      vm.albumList = albumSearch.query({qry: vm.searchIn.q}, function(response) {
        return response.albums.items;
      });
    }
  }
})();
