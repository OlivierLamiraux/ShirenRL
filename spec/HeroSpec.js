define(["Hero"], function(Hero) {

  describe("Hero", function() {
    var hero;
    
    beforeEach(function () {
      hero = new Hero();
      
    });
    
    it("should have statistic", function() {
      expect(hero.currentHp).toEqual(hero.maxHp);
      expect(hero.currentStr).toEqual(hero.maxStr);
      expect(hero.currentFullness).toEqual(hero.maxFullness);
      expect(hero.attackPower).toBeDefined();
      expect(hero.bag).toBeDefined();
      expect(hero.exp).toBeDefined();
    });
    
    it("can use some item", function() {
      var spy = jasmine.createSpyObj('spy', ['useCallBack']),
          action = jasmine.createSpy("action");
      
      hero.on('use', action);
      hero.use(spy);
      
      expect(spy.useCallBack).toHaveBeenCalled();
      expect(action).toHaveBeenCalled();
    });
    
    it("can eat some item", function() {
      var spy = jasmine.createSpyObj('spy', ['eatCallBack']),
          action = jasmine.createSpy("action");
      
      hero.on('eat', action);
      hero.eat(spy);
      
      expect(spy.eatCallBack).toHaveBeenCalled();
      expect(action).toHaveBeenCalled();
    });
    
    it("can read some item", function() {
      var spy = jasmine.createSpyObj('spy', ['readCallBack']),
          action = jasmine.createSpy("action");
      
      hero.on('read', action);
      hero.read(spy);
      
      expect(spy.readCallBack).toHaveBeenCalled();
      expect(action).toHaveBeenCalled();
    });
    
    it("can press some item", function() {
      var spy = jasmine.createSpyObj('spy', ['pressCallBack']),
          action = jasmine.createSpy("action");
      
      hero.on('press', action);
      hero.press(spy);
      
      expect(spy.pressCallBack).toHaveBeenCalled();
      expect(action).toHaveBeenCalled();
    });
    
    it("can throw some item", function() {
      var action = jasmine.createSpy("action");
      
      hero.on('throw', action);
      
      hero.thr0w({});
      
      expect(action).toHaveBeenCalled();
    });
    
    it("can put some item", function() {
      var action = jasmine.createSpy("action");
      
      hero.on('put', action);
      
      hero.put({});
      
      expect(action).toHaveBeenCalled();
    });
    
    it("can attack for fight mob, dig and revealle trap", function() {
      var action = jasmine.createSpy("action");
      
      hero.on('attack', action);
      
      hero.attack();
      
      expect(action).toHaveBeenCalled();
    });
    
    it("should implemente PubSub", function() {
      var isExecuted = false;
      hero.on('use', function(){ isExecuted = true; });
      hero.trigger('use');
      
      expect(isExecuted).toBeTruthy();
    });
    
    it("test", function() {
      hero.on('use', function(x){ console.log(x, this); });
      hero.use({ name : "coucou" });
      
    });
  });
});