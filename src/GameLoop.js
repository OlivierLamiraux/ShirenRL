define(function() {
  var GameLoop, fn;
  
  GameLoop = function () {
    var that = this;
    this._actors = [];
    this._clock = 0;
    this._maxActorSpeed = function() {
      var actor = _.max(this._actors, function(actor){ return actor.getSpeed(); });
      return actor.getSpeed();
    };
    this._minActorSpeed = function() {
      var actor = _.min(this._actors, function(actor){ return actor.getSpeed(); });
      return actor.getSpeed();
    };
  };
  
  fn = GameLoop.prototype;
  
  fn.addActor = function(actor) {
    _.defaults(actor, {
      getSpeed : function() { return 0; }
    });
    this._actors.push(actor);
    this._clock = this._minActorSpeed();
  };
  
  // An actor must implement the methode getSpeed for use the speed feature
  fn.turn = function() {
    var clock = this._clock,
        actors;
    
    actors =  _.filter(this._actors, function (actor) { 
      return ((clock + 1) % (actor.getSpeed() + 1)) === 0; 
    });
    
    this._clock < ((this._maxActorSpeed() * 2) + 1) ? this._clock++ : this._clock = this._minActorSpeed();
    
    return actors;
  };
  
  return GameLoop;
});
