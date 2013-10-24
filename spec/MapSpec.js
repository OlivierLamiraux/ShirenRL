
define(["Map"], function(Map) {

  describe("Map", function() {
    var map;
    
    beforeEach(function () {
      map = new Map(10, 10);
      
    });
    
    it("should set dimension", function() {
      expect(map.getHeight()).toBe(10);
      expect(map.getWidth()).toBe(10);
    });
    
    it("should have rooms", function() {
      var rooms = map.getRooms();
      
      expect(_.isArray(rooms)).toBeTruthy();
    });
    
    describe("Load Ascii Map", function() {
      it("can load Ascii map" , function() {
        var dummyMap = ['......',
                        '......',
                        '......',
                        '......',
                        '......'];
                        
        map.loadAsciiMap(dummyMap);
                          
        expect(map.getHeight()).toBe(5);
        expect(map.getWidth()).toBe(6);
        expect(map._asciiMap).toBe(dummyMap);
      });
    });
    
    describe("get part", function() {
       beforeEach(function () {
        map.loadAsciiMap(['0.........',
                          '.1........',
                          '..2.......',
                          '...3......',
                          '....4.....',
                          '0123456789',
                          '......6...',
                          '.......7..',
                          '........8.',
                          '.........9']);
      
      });
      it("part inside the map", function() {
        var expectPart = ['2......',
                          '.3.....',
                          '..4....',
                          '2345678',
                          '....6..'];
        
        var part = map.part({ x : 2, y : 2, width : 7, height : 5 });
        
        expect(part).toEqual(expectPart);
      });
      
      it("part in down right", function() {
        var expectPart = ['3456789',
                          '...6...',
                          '....7..',
                          '.....8.',
                          '......9'];
        
        var part = map.part({ x : 9, y : 9, width : 7, height : 5 });
        
        expect(part).toEqual(expectPart);
      });
    });
    
    
    describe("Cell", function() {
      var cell;
      
      beforeEach(function () {
        cell = new Map.Cell();
      });
      
      it("should have a symbol", function() {
        cell.setSymbol('.');
        
        expect(cell.getSymbol()).toEqual('.');
      });
      
      it("can have a trap", function() {
        var dummyTrap = {};
        cell.setTrap(dummyTrap);
        
        expect(cell.getTrap()).toEqual(dummyTrap);
      });
      
      it("can have an item", function() {
        var dummyItem = {};
        cell.setItem(dummyItem);
        
        expect(cell.getItem()).toEqual(dummyItem);
      });
      
      xit("can have the Hero, Npc or Mob", function() {
        var dummyActor = {};
        cell.setActor(dummyActor);
        
        expect(cell.getActor()).toEqual(dummyActor);
      });
      
      it("can be passable", function() {
      });
      
      it("can be breakable", function() {
      });
    });
  });
});