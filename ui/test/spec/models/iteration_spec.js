
/*global Hop, HopBill*/
'use strict';

describe('Iteration', function(){
  var zeroPointStory, hugeStory, smallStory;
  beforeEach(function(){
    zeroPointStory = new Story( {name: "Zero", points: 0} );
    smallStory = new Story( {name: "Really small", points: 2} );
    hugeStory = new Story( {name: "Really Big Story", points: 14} );
  });

  it('should have 0 total points by default', function () {
      var iteration = new Iteration();
      expect(iteration.totalPoints()).toEqual(0);
  });

  it('should be able to add Stories', function () {
      var iteration = new Iteration();
      iteration.add(zeroPointStory);
      iteration.add(hugeStory);
      expect(iteration.stories.length).toEqual(2);
      expect(iteration.stories[0]).toEqual(zeroPointStory);
      expect(iteration.stories[1]).toEqual(hugeStory);
  });

  it('should be able to remove Stories', function () {
      var iteration = new Iteration();
      iteration.add(zeroPointStory);
      iteration.add(hugeStory);
      expect(iteration.stories.length).toEqual(2);
      iteration.remove(zeroPointStory);
      expect(iteration.stories.length).toEqual(1);
      iteration.remove(hugeStory);
      expect(iteration.stories.length).toEqual(0);
  });

  it('should be able to tally the total points', function(){
    var iteration = new Iteration();
    iteration.add(smallStory);
    iteration.add(hugeStory);
    expect(iteration.totalPoints()).toEqual(smallStory.points + hugeStory.points);
  });

  xit('should have remaining points', function () {
  });

  
  xit('should work as used in the controller', function () {
    var iteration  = new Iteration(),
	story = {};
    
    story.name = "My long story name";
    story.points = 3;

    iteration.addStory(story);
    
    expect(iteration.totalPoints()).toEqual(3);
    expect(iteration.totalStories()).toEqual(1);
  });
});
