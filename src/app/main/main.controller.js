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
      q: '',
      fail: ''
    };
    vm.itemList = [];

    vm.getItemSearch = function() {
      vm.searchIn.fail = '';
      vm.itemList = itemSearch.getItem(vm.searchIn.q, vm.querySelect.value)
      .success(function(data) {
        vm.itemList = data;
      })
      .error(function() {
        console.log('Error fetching data');
        vm.searchIn.fail = 'Sorry, we had a problem talking to the server';
      });
    };

    vm.getNextItemSearch = function() {
      vm.searchIn.fail = '';
      //TODO: incorporate way to check item type
      vm.itemList = itemSearch.getNext(vm.itemList.albums.next)
      .success(function(data) {
        vm.itemList = data;
      })
      .error(function() {
        console.log('Error fetching data');
        vm.searchIn.fail = 'Sorry, we had a problem talking to the server';
      });
    };
  }
})();
