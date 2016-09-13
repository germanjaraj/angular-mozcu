'use strict';

describe('Controller: IngresarCtrl', function () {

  // load the controller's module
  beforeEach(module('angularMozcuApp'));

  var IngresarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IngresarCtrl = $controller('IngresarCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(IngresarCtrl.awesomeThings.length).toBe(3);
  });
});
