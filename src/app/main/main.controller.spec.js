(function() {
  'use strict';

  describe('controllers', function(){

    beforeEach(module('searchify'));

    it('should define more than 0 albums', inject(function($controller) {
      var vm = $controller('MainController');

      expect(angular.isArray(vm.albums)).toBeTruthy();
      expect(vm.albums.length > 0).toBeTruthy();
    }));
  });
})();
