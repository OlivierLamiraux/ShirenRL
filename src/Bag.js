define(function() {
  var Bag, fn;
  
  Bag = function (numberOfSlot) {
    var that = this,
        numberOfSlot = numberOfSlot || 10;
        
    this._items = [];
    
    // Redefine the push method for this array
    this._items.push = function() {
        if (this.length < numberOfSlot) { Array.prototype.push.apply(this,arguments); }
        else { throw "NoRoomAvailable"; }
    };
    
  };
  
  fn = Bag.prototype;
  
  fn.add = function(item) {
    if (item.isStackable) {
      this.addStackedItem(item);
    } else {
      this._items.push(item);
    }
  };
  
  fn.addStackedItem = function(item) {
    var current = _.findWhere(this._items, {name : item.name});
    if (!current) {
        this._items.push(item);
    } else {
        current.count += item.count;
    }
  };
  
  fn.getItems = function() {
    return this._items;
  };
  
  fn.getItem = function(index) {
    return this._items[index];
  };
  
  
  return Bag;
});
