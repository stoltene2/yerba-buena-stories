'use strict';

angular.module('uiApp')
  .controller('MainCtrl', function ($scope, User) {

    $scope.login = function(username, password) {
      var user = User.find(username);
      
      if (password == user.password) {
        $scope.currentUser = user;
        $scope.loginFailed = false;
      } else {
        $scope.currentUser = null;
        $scope.loginFailed = true;
        $scope.password = '';
      }
    };

});
