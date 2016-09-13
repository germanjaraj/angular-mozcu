'use strict';

describe('Controller: AcercaDeMozcuCtrl', function () {

  // load the controller's module
  beforeEach(module('angularMozcuApp'));

  var AcercaDeMozcuCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AcercaDeMozcuCtrl = $controller('AcercaDeMozcuCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AcercaDeMozcuCtrl.awesomeThings.length).toBe(3);
  });
});
