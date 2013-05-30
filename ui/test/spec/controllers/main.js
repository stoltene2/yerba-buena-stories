'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('uiApp'));

  var MainCtrl,
      scope,
      badUserLogin = { username: 'wrong', password: 'bad' },
      validUserLogin = { username: 'admin', password: 'admin' };

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  describe('Logging in with wrong username/password', function() {
    it('should set loggedInFailed to true', function () {
      scope.userLogin = badUserLogin;
      scope.login();
      expect(scope.loginFailed).toEqual(true);
    });

    it('should set currentUser to null', function () {
      scope.userLogin = badUserLogin;
      scope.login();
      expect(scope.currentUser).toBe(null);
    });

    it('should set password to blank', function () {
      scope.userLogin = badUserLogin;
      scope.login();
      expect(scope.userLogin.password).toEqual('');
    });
  });

  describe('Logging in with valid username/password', function() {
    it('should set currentUser', function () {
      scope.userLogin = validUserLogin;
      scope.login();
      expect(scope.currentUser.username).toEqual(validUserLogin.username);
    });
    it('should set loginFailed to false', function () {
      scope.userLogin = validUserLogin;
      scope.login();
      expect(scope.loginFailed).toEqual(false);
    });
  });

});

