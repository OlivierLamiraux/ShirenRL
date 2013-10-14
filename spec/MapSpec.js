
define(["Map"], function(Map) {

  describe("Map", function() {
    var map;
    
    beforeEach(function () {
      map = new Map(10, 10);
      
    });
    
    it("should set dimension", function() {
      expect(map.getHeight()).toEqual(10);
      expect(map.getWidth()).toEqual(10);
    });
    
    it("should have rooms", function() {
      var rooms = map.getRooms();
      
      expect(_.isArray(rooms)).toBeTruthy();
    });
    
    describe("Cell", function() {
      it("should have a symbol", function() {
      });
      
      it("can have a trap", function() {
      });
      
      it("can have an item", function() {
      });
      
      it("can have the Hero, Npc or Mob", function() {
      });
      
      it("can be passable", function() {
      });
      
      it("can be breakable", function() {
      });
    });
  });
});