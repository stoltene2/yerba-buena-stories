'use strict';

angular.module('uiApp')
  .controller('StoryCtrl', function ($scope) {
    $scope.stories = [];

    
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
