'use strict';

describe('Controller: StoryCtrl', function () {

  // load the controller's module
  beforeEach(module('uiApp'));

  var StoryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StoryCtrl = $controller('StoryCtrl', {
      $scope: scope
    });
  }));

  it('should start with no stories', function () {
    expect(scope.stories.length).toBe(0);
  });
});
