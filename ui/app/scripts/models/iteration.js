/*global Iteration */
"use strict";

function Iteration() {
  this.stories = [];
}

(function (iterationPrototype){
  iterationPrototype.add = function(newStory) {
    this.stories.push(newStory);
  };

  iterationPrototype.remove = function(story) {
    this.stories.splice(this.stories.indexOf(story), 1);
  };

  iterationPrototype.totalPoints = function () {
    var totalPoints = 0;
    return totalPoints;
  };

  iterationPrototype.stories = function () {
    return this.stories;
  };

  iterationPrototype.remainingPoints = function () {
    var remainingPoints = 0;
    return remainingPoints;
  };

  

}(Iteration.prototype));
