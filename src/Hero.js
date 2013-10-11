/*
 *
 *
 * Events :
 *  - use
 *  - eat
 *  - read
 *  - press
 *  - throw
 *  - put
 *  - attack
 */
define(['Bag', 'Events'], function(Bag, pubsub) {
  var Hero, fn;
  
  Hero = function () {
    var that = this;
    
    this.currentHp = this.maxHp = 15;
    this.currentStr = this.maxStr = 8;
    this.currentFullness = this.maxFullness = 100;
    this.attackPower = 1;
    this.exp = 0;
    
    this.bag = new Bag();
    
    // Extend with PubSub
    _.extend(this, pubsub);
  };
  
  fn = Hero.prototype;
  
  // Item must implemente the useCallBack
  fn.use = function(item) {
    if ("useCallBack" in item && _.isFunction(item.useCallBack)) item.useCallBack(this);
    
    this.trigger("use", item);
  };
  
  fn.eat = function(item) {
    if ("eatCallBack" in item && _.isFunction(item.eatCallBack)) item.eatCallBack(this);
    
    this.trigger("eat", item);
  };
  
  fn.read = function(item) {
    if ("readCallBack" in item && _.isFunction(item.readCallBack)) item.readCallBack(this);
    
    this.trigger("read", item);
  };
  
  fn.press = function(item) {
    if ("pressCallBack" in item && _.isFunction(item.pressCallBack)) item.pressCallBack(this);
    
    this.trigger("press", item);
  };
  
  fn.thr0w = function(item) {
    this.trigger("throw", item);
  };
  
  fn.put = function(item) {
    this.trigger("put", item);
  };
  
  fn.attack = function() {
    this.trigger("attack");
  };
  
  return Hero;
});
