
// ## Game
// The main object for the game.
define(["Hero", "Map", "GameLoop"], function(Hero, Map, GameLoop) {
  var Game, fn;
  
  Game = function () {
    var that = this;
    
    this._screenHeight = 5;
    this._screenWidth = 7;
    this._hero = new Hero();
    this._heroPosition = {
      x : 0,
      y : 0
    };
    
    this._map = new Map();
    
    this._actors = [];
    
    this._gameLoop = new GameLoop();
    
  };
  
  fn = Game.prototype;
  
  // ### screen
  // Get the current screen view relative to the position of the hero.
  // Return an array of ascii like :
  //
  //     ['...........',
  //      '...........']
  fn.screen = function () {
    var deltaX = Math.floor(this._screenWidth / 2),
        deltaY = Math.floor(this._screenHeight / 2);
        
    return this._map.part({
      x : this._heroPosition.x - deltaX,
      y : this._heroPosition.y - deltaY,
      height : this._screenHeight,
      width : this._screenWidth
    });
  }
  
  // ### heroPosition
  // Set the hero position
  fn.heroPosition = function (position) {
    this._heroPosition = position;
  }
  
  // ### heroMove
  // Move the hero. Parameter is the distance, is a literal of type `{ x : [integer], y : [integer] }`.
  //
  // Return false if hero can't move to this position.
  fn.heroMove = function(distance) {
    var destination = {
      x : this._heroPosition.x + (distance.x || 0),
      y : this._heroPosition.y + (distance.y || 0)
    };
    if (!this._map.isPassable(destination)) return false;

    this._heroPosition.x = destination.x;
    this._heroPosition.y = destination.y;
  }
  
  // ### heroMoveXXX
  // Shortcut for move the hero.
  //
  // Values of XXX :
  //
  // -   Up
  // -   Down
  // -   Left
  // - Right
  // - UpLeft
  // - UpRight
  // - DownLeft
  // - DownRight
  fn.heroMoveUp = function() {
    this.heroMove({x : -1});
  }
  
  fn.heroMoveDown = function() {
    this.heroMove({x : 1});
  }
  
  fn.heroMoveLeft = function() {
    this.heroMove({y : -1});
  }
  
  fn.heroMoveRight = function() {
    this.heroMove({y : 1});
  }
  
  fn.heroMoveUpLeft = function() {
    this.heroMove({x : -1, y : -1});
  }
  
  fn.heroMoveDownLeft = function() {
    this.heroMove({x : 1, y : -1});
  }
  
  fn.heroMoveUpRight = function() {
    this.heroMove({x : -1, y : 1});
  }
  
  fn.heroMoveDownRight = function() {
    this.heroMove({x : 1, y : 1});
  }
  
  fn.addActor = function(actor, at) {
    at.actor = actor;
    this._actors.push(at);
  }
  
  fn.actorAt = function(at) {
    if (at.x === this._heroPosition.x && at.y === this._heroPosition.y) {
      return this._hero;
    }
    
    return _.find(this._actors, function(actor) { 
      return (at.x === actor.x && at.y === actor.y);
    })
    .actor;
  }
  
  return Game;
});
