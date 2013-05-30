'use strict';

angular.module('uiApp')
  .controller('MainCtrl', function ($scope, UserService) {

    //child scopes can't inherit primitives 
    //http://stackoverflow.com/a/14234367/1691
    $scope.userLogin = { };

    $scope.login = function() {
      var user = UserService.find($scope.userLogin.username);
      if ($scope.userLogin.password === user.password) {
        $scope.currentUser = user;
        $scope.loginFailed = false;
      } else {
        $scope.currentUser = null;
        $scope.loginFailed = true;
        $scope.userLogin.password = '';
      }
    };

});
