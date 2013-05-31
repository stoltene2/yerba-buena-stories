'use strict';

angular.module('uiApp')
  .controller('IterationCtrl', function ($scope) {
    $scope.iteration = new Iteration();

    $scope.addStory = function() {
      $scope.iteration.add( new Story({name: $scope.name , points: $scope.points }) );
      $scope.reset();
    };

    $scope.reset = function() {
      $scope.points = 0;
      $scope.name = '';
    };

});
