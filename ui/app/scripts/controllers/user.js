'use strict';

angular.module('uiApp')
  .controller('UserCtrl', function ($scope) {

    //TODO do something with currentUser... like use it to determine
    //whether or not to show the login form

    $scope.authenticate = function(username, password) {
      $scope.currentUser = $scope.findUser(username);
      
      if (password == $scope.currentUser.password) {
        $('#fail').hide();
        $('.login').replaceWith("<h4 class='welcome'>Welcome " + username + "</h4>");
        return true;
      } else {
        $('#fail').show();
        $scope.password = '';
        return false;
      }
    };

    //TODO: Move this to a model
    $scope.findUser = function(username) {
      return { username: username, 
               password: 'admin'  };
    };
});
