define(function() {
  var ItemManager, fn;
  
  ItemManager = function() {
    this._itemTemplate = {};
    
    // Add a dummy template
    this.addTemplate('dummy');
  };
  
  fn = ItemManager.prototype;
  
  fn.create = function(template, params) {
    var item = _.clone(this._itemTemplate[template]);
    return _.extend(item, params || {});
  };
  
  fn.addTemplate = function(template, parent, params) {
    
    this._itemTemplate[template] = {};
    
    if (!_.isString(parent)) {
      params = parent;
    } else {
      // We inherits from parent template  
      _.extend(this._itemTemplate[template], this._itemTemplate[parent]);
      delete this._itemTemplate[template].name;
    }
    
    _.extend(this._itemTemplate[template], params || {});
    _.defaults(this._itemTemplate[template], { name : template });
    
  };
  
  return ItemManager;
});