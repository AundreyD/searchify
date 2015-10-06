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

     vm.getAlbumSearch = function() {
      vm.albumList = albumSearch.query(vm.searchIn.q).success(function(data) {
        vm.albumList = data;
      });
    };
  }
})();
