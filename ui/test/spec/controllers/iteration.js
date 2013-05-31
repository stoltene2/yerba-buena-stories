'use strict';

describe('Controller: IterationCtrl', function () {

  beforeEach(module('uiApp'));

  var IterationCtrl,
      scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IterationCtrl = $controller('IterationCtrl', {
      $scope: scope
    });
  }));

  it('should start with no stories', function () {
    expect(scope.iteration.stories.length).toBe(0);
  });


  it('should unset the story field when a story is added', function() {
    scope.name = "new story";
    scope.addStory();
    expect(scope.name).toEqual("");
  });

  it("should be able to set the number of points", function() {
    scope.points = 12;
    scope.addStory();
    expect(scope.iteration.stories[0].points).toEqual(12);
  });

  it("should clear the points field when a story is added", function() {
    scope.points = 12;
    scope.addStory();
    expect(scope.points).toEqual(0);
  });
  
  it("should be able to tally the total # of points", function() {
    scope.name = "1 points";
    scope.points = 1;
    scope.addStory();

    scope.name = "3 points";
    scope.points = 3;
    scope.addStory();

    expect(scope.iteration.totalPoints()).toEqual(4);
  });

});
