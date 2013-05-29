angular.module('uiApp').factory("User", function() {

  return {

    find: function(username) {
      //TODO: Do some HTTP call
      return { username: username, 
               password: 'admin'  };
    }

  }

});
