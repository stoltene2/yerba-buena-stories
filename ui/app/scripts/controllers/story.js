'use strict';

angular.module('uiApp')
  .controller('StoryCtrl', function ($scope) {
    $scope.addStory = function() {
	$scope.stories.push( {name: $scope.name} );
	$scope.name = '';
    };

    $scope.stories = [];
});
