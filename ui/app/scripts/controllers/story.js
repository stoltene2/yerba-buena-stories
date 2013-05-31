'use strict';

angular.module('uiApp')
  .controller('StoryCtrl', function ($scope) {
    $scope.addStory = function() {
      $scope.stories.push( new Story({name: $scope.name , points: $scope.points }) );
      $scope.reset();
    };

    $scope.reset = function() {
      $scope.points = 0;
      $scope.name = '';
    };

    $scope.totalPoints = function() {
      var total = 0;
      angular.forEach($scope.stories, function(story){
	total += story.points;
      });
      return total; 
    };

    $scope.stories = [];
});
