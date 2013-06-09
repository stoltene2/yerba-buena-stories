'use strict';

angular.module('uiApp').factory('UserService', function() {

  return {

    find: function(username) {
      //TODO: Do some HTTP call & get some JSON & turn it into a User
      return new User({ username: username,
                        password: 'admin'  });
    }

  };

});
