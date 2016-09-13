'use strict';

describe('Controller: ExplorarCtrl', function () {

  // load the controller's module
  beforeEach(module('angularMozcuApp'));

  var ExplorarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExplorarCtrl = $controller('ExplorarCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ExplorarCtrl.awesomeThings.length).toBe(3);
  });
});
