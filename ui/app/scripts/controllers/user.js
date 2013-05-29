'use strict';

angular.module('uiApp')
  .controller('UserCtrl', function ($scope, User) {

    $scope.loggedIn = false;

    $scope.login = function(username, password) {
      $scope.user = User.find(username);
      
      if (password == $scope.user.password) {
        $scope.loginFailed = false;
        $scope.loggedIn = true;
      } else {
        $scope.loginFailed = true;
        $scope.loggedIn = false;
        $scope.password = '';
      }
    };

});
