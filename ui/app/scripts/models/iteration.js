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
    var totalPoints = 0,
        cnt = 0,
	numberOfStories = this.stories.length;

    for(cnt; cnt < numberOfStories; cnt++) {
      totalPoints += this.stories[cnt].points;
    };

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
