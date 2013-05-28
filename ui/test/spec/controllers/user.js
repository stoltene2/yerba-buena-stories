'use strict';

describe('Controller: UserCtrl', function () {

  // load the controller's module
  beforeEach(module('uiApp'));

  var UserCtrl,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserCtrl = $controller('UserCtrl', {
      $scope: scope
    });
  }));

  it('should return false if id/pw dont match', function () {
    expect(scope.authenticate('wrong', 'bad')).toEqual(false);
  });

  it('should return true if id/pw are both admin', function () {
    expect(scope.authenticate('admin', 'admin')).toEqual(true);
  });
});

