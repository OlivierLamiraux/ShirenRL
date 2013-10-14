define(function() {
  var Map, fn;
  
  Map = function (height, width) {
    var that = this;
    
    this._height = height || 20;
    this._width = width || 20;
    
  }
  
  fn = Map.prototype;
  
  fn.getHeight = function() {
    return this._height;
  }
  
  fn.getWidth = function() {
    return this._width;
  }
  
  fn.getRooms = function() {
    return [];
  }
  
  // Room
  Map.Room = function (height, width) {
  }
  
  // Cell
  Map.Cell = function() {
  }
  
  return Map;
});