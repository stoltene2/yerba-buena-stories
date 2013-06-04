"use strict";

function Story(props) {
  var done = false;
  this.name = props.name;
  this.points = props.points;

  this.isDoneDone = function() {
    return done;
  }

  this.doneDone = function() {
    done = true;
  }
};

