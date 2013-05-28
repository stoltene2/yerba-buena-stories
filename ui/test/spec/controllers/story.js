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

  it('should be able to add stories', function() {
      var name = "new story";
      scope.name = name;
      scope.addStory();
      expect(scope.stories.length).toBe(1);
      expect(scope.stories[0].name).toEqual(name)
  });

  it('should unset the story field when a story is added', function() {
      scope.name = "new story";
      scope.addStory();
      expect(scope.name).toEqual("");
  });

});
