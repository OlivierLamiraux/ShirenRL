/*
 * This file is a template for create object
 *
 */
define(["Hero", "Map"], function(Hero, Map) {
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
    
    
  };
  
  fn = Game.prototype;
  
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
  
  fn.heroPosition = function (position) {
    this._heroPosition = position;
  }
  
  return Game;
});
