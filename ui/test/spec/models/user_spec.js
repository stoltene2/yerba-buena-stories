'use strict';

describe('User Class', function(){

  var user;
  beforeEach(function(){
    user = new User({username:'admin', password: 'whatever'});
  });

  it('should assign some properties', function() {
    expect(user.username).toEqual('admin');
    expect(user.password).toEqual('whatever');
  });

});

