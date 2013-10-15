define(["Hero", "Manager"], function(Hero, ItemManager) {
  describe("Items", function() {
    var hero, game,
        itemManager = new ItemManager();
    
    itemManager.addTemplate("MedicalHerb", {
      eatCallBack : function(hero) {
        hero.currentHp = hero.maxHp = (hero.maxHp + 1);
      }
      
    });
    
    itemManager.addTemplate("MonsterHouseScroll", {
      gameCallBack : function(game) {
        var room = game.getMap().roomAt(game.getPosition['hero']),
            cell;
        
        for(cell in room.cells) {
          // place some mob, trap and item
        }
        
      }
    });
    
    beforeEach(function () {
      hero = new Hero();
      
    });
    
    it("Medical Herbs", function() {
      hero.currentHp = hero.maxHp = 10;
     
      hero.eat(itemManager.create("MedicalHerb"));
      
      expect(hero.maxHp).toBe(11);
      expect(hero.currentHp).toBe(11);
    });
    
    it("Monster House Scroll", function() {
      hero.read(itemManager.create("MonsterHouseScroll"));
    });
    
  });
});