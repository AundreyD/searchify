'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('/index.html');
    page = require('./main.po');
  });

  it('should list more than 0 albums', function () {
    expect(page.thumbnailEls.count()).toBeGreaterThan(0);
  });

});
