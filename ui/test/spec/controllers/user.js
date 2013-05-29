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

  it('should set loggedIn to false', function () {
    scope.login('wrong', 'bad');
    expect(scope.loggedIn).toEqual(false);
  });

  it('should set loggedIn to true', function () {
    scope.login('admin', 'admin');
    expect(scope.loggedIn).toEqual(true);
  });

  it('should set the password to blank if failure', function () {
    scope.login('wrong', 'bad');
    expect(scope.password).toEqual('');
  });

});

