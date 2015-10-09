(function() {
  'use strict';

  angular
    .module('searchify')
    .controller('MainController', ['itemSearch', MainController]);


  /** @ngInject */
  function MainController(itemSearch) {
    var vm = this;

    vm.selOptions = [{
      value: 'album',
      label: 'Albums'
    }, {
      value: 'track',
      label: 'Tracks'
    }];
    vm.searchIn = {
      q: ''
    };
    vm.itemList = [];

    vm.getItemSearch = function() {
      vm.itemList = itemSearch.query(vm.searchIn.q, vm.querySelect.value).success(function(data) {
        vm.itemList = data;
      });
    };
  }
})();
