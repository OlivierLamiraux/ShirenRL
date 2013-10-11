define(["ItemManager"], function(ItemManager) {
  describe("Item Manager", function() {
    var itemManager;
    
    beforeEach(function() {
      itemManager = new ItemManager();
    });
    
    it("should create an item for the given template", function() {
      var dummy = itemManager.create('dummy');
      var otherDummy = itemManager.create('dummy');
      
      dummy.test = 1;
      otherDummy.test = 2;
      
      expect(dummy).toBeDefined();
      expect(dummy.test).toEqual(1);
    });
    
    it("should create template", function() {
      itemManager.addTemplate('sword', {
        equipementSlot : 'slot',
        maxLevel : 99
      });
      
      itemManager.addTemplate('notSameName', {
        name : 'different'
      });
      
      itemManager.addTemplate('withoutProperty');
      
      var sword = itemManager.create('sword');
      var notSameName = itemManager.create('notSameName');
      var withoutProperty = itemManager.create('withoutProperty');
      var createWithProperty = itemManager.create('dummy', { count : 10 });
      
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
      itemManager.addTemplate('sword', {
        equipementSlot : 'slot',
        maxLevel : 99
      });
      itemManager.addTemplate('katana', 'sword', {
        maxLevel : 50
      });
      
      itemManager.addTemplate('fireband', 'sword', {
        name : 'utimate'
      });
      
      var katana = itemManager.create('katana');
      var fireband = itemManager.create('fireband');
      
      // sword
      expect(katana.name).toEqual('katana');
      expect(katana.equipementSlot).toEqual('slot');
      expect(katana.maxLevel).toEqual(50);
      
      // fireband
      expect(fireband.name).toEqual('utimate');
    });
  });
});