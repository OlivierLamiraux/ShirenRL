define(function() {
  var Map, fn;
  
  Map = function (height, width) {
    var that = this;
    
    this._height = height || 20;
    this._width = width || 20;
    
    // Init the asciiMap with dot
    this._asciiMap =  (function() {
      var x, y, line, result = [];
      for (x = 0; x < this._width; x++) {
        line = "";
        for (y = 0; y < this._height; y++) {
          line += ".";
        }
        result.push(line);
      }
      
      return result;
    })();
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
  
  fn.loadAsciiMap = function(asciiMap) {
    this._height = asciiMap.length;
    this._width = asciiMap[0].length;
    this._asciiMap = asciiMap;
  }
  
  fn.part = function(options) {
    var y, part = [], 
        maxY = this._height - 1,
        maxX = this._width - 1,
        baseY = options.y + options.height > maxY ? this._height - options.height : options.y,
        baseX = options.x + options.width > maxX ? this._width - options.width : options.x;
        
    if (baseY < 0) baseY = 0;
    if (baseX < 0) baseX = 0;
    for (y = 0; y < options.height; y++) {
      part.push(this._asciiMap[baseY + y].substring(baseX, baseX + options.width));
    }
    return part;
  }
  
  // Room
  Map.Room = function (height, width) {
  }
  
  // Cell
  Map.Cell = function() {
    this._symbol = '';
    this._trap = undefined;
  }
  
  cellFn = Map.Cell.prototype;
  
  cellFn.getSymbol = function() {
    return this._symbol;
  }
  
  cellFn.setSymbol = function(symbol) {
    this._symbol = symbol;
  }
  
  cellFn.getTrap = function() {
    return this._trap;
  }
  
  cellFn.setTrap = function(trap) {
    this._trap = trap;
  }
  
  cellFn.getItem = function() {
    return this._item;
  }
  
  cellFn.setItem = function(item) {
    this._item = item;
  }
  
  return Map;
});