define(["Manager"], function(Manager) {
  describe("Manager", function() {
    var manager;
    
    beforeEach(function() {
      manager = new Manager();
    });
    
    it("should create an item for the given template", function() {
      var dummy = manager.create('dummy');
      var otherDummy = manager.create('dummy');
      
      dummy.test = 1;
      otherDummy.test = 2;
      
      expect(dummy).toBeDefined();
      expect(dummy.test).toEqual(1);
    });
    
    it("should create template", function() {
      manager.addTemplate('sword', {
        equipementSlot : 'slot',
        maxLevel : 99
      });
      
      manager.addTemplate('notSameName', {
        name : 'different'
      });
      
      manager.addTemplate('withoutProperty');
      
      var sword = manager.create('sword');
      var notSameName = manager.create('notSameName');
      var withoutProperty = manager.create('withoutProperty');
      var createWithProperty = manager.create('dummy', { count : 10 });
      
      // sword
      expect(sword.name).toEqual('sword');
      expect(sword.equipementSlot).toEqual('slot');
      expect(sword.maxLevel).toEqual(99);
      
      // notSameName
      expect(notSameName.name).toEqual('different');
      
      // withoutProperty
      expect(withoutProperty.name).toEqual('withoutProperty');
      
      // createWithProperty
      expect(createWithProperty.count).toEqual(10);
      
    });
    
    it("should create template from another template", function() {
      manager.addTemplate('sword', {
        equipementSlot : 'slot',
        maxLevel : 99
      });
      manager.addTemplate('katana', 'sword', {
        maxLevel : 50
      });
      
      manager.addTemplate('fireband', 'sword', {
        name : 'utimate'
      });
      
      var katana = manager.create('katana');
      var fireband = manager.create('fireband');
      
      // sword
      expect(katana.name).toEqual('katana');
      expect(katana.equipementSlot).toEqual('slot');
      expect(katana.maxLevel).toEqual(50);
      
      // fireband
      expect(fireband.name).toEqual('utimate');
    });
  });
});