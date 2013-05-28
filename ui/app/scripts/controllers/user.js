'use strict';

angular.module('uiApp')
  .controller('UserCtrl', function ($scope) {
    $scope.authenticate = function(username, password) {
      if (username === 'admin' && password === 'admin') {
        console.log("yep");
      } else {
        console.log("nope");
      }
    };
});
