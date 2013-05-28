'use strict';

angular.module('uiApp')
  .controller('UserCtrl', function ($scope) {

    $scope.authenticate = function(username, password) {
      var user = $scope.findUser(username);
      
      if (password == user.password) {
        console.log("yep");
        $('#fail').hide();
        $('.login').replaceWith("<h4 class='welcome'>Welcome " + username + "</h4>");
        return true;
      } else {
        console.log("nope");
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
