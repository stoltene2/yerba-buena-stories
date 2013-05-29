'use strict';

describe('Controller: StoryCtrl', function () {

  beforeEach(module('uiApp'));

  var StoryCtrl,
      scope;

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
    expect(scope.stories[0].name).toEqual(name);
  });

  it('should unset the story field when a story is added', function() {
    scope.name = "new story";
    scope.addStory();
    expect(scope.name).toEqual("");
  });

  it("should be able to set the number of points", function() {
    scope.points = 12;
    scope.addStory();
    expect(scope.stories[0].points).toEqual(12);
  });

  it("should clear the points field when a story is added", function() {
    scope.points = 12;
    scope.addStory();
    expect(scope.points).toEqual(0);
  });
  
  it("should be able to tally the total # of points", function() {
    scope.stories = [{name: "1", points: 1}, {name: "2", points: 3} ];
    expect(scope.totalPoints()).toEqual(4);
  });

});
