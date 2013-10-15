define(["Bag", "Manager"], function(Bag, ItemManager) {

  describe("Bag", function() {
    var bag, 
        itemManager = new ItemManager();
    
    itemManager.addTemplate('item 1');
    itemManager.addTemplate('item 2');
    itemManager.addTemplate('stackable', {
      isStackable : true,
      count : 1
    });
    
    beforeEach(function () {
      bag = new Bag();
      
    });
    
    it("should add item", function() {
      var item1 = itemManager.create("item 1"),
          item2 = itemManager.create("item 2");
          
      bag.add(item1);
      bag.add(item2);
      
      expect(bag.getItems()).toEqual([item1, item2]);
    });
    
    it("should add stacked item", function() {
      var item = itemManager.create("stackable");
      
      bag.add(itemManager.create("stackable"));
      bag.add(itemManager.create("stackable", {count : 9}));
      
      expect(bag.getItems().length).toEqual(1);
      expect(bag.getItem(0).count).toEqual(10);
    });
    
    it("should have limited space", function() {
      var fillLimitedBag = function() {
        bag = new Bag(1);
        bag.add(1);
        bag.add(2);
      }
      
      expect(fillLimitedBag).toThrow("NoRoomAvailable");
    });
  });
  
});