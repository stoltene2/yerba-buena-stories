'use strict';

describe('Story Class', function(){

  var story;
  beforeEach(function(){
    story = new Story({name:'This is a story', points: 10 });
  });

  it('should assign some properties', function() {
    expect(story.name).toEqual('This is a story');
    expect(story.points).toEqual(10);
    expect(story.isDoneDone()).toEqual(false);
  });

  it('can set done-done status', function() {
    story.doneDone();
    expect(story.isDoneDone()).toEqual(true);
  });
});

