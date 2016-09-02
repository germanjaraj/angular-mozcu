'use strict';

describe('Controller: FormulariofutbolCtrl', function () {

  // load the controller's module
  beforeEach(module('angularMozcuApp'));

  var FormulariofutbolCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FormulariofutbolCtrl = $controller('FormulariofutbolCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FormulariofutbolCtrl.awesomeThings.length).toBe(3);
  });
});
