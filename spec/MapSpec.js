
define(["Map"], function(Map) {

  describe("Map", function() {
    var map;
    
    beforeEach(function () {
      map = new Map(10, 10);
      
    });
    
    it("should be true", function() {
      expect(map.getHeight()).toEqual(10);
      expect(map.getWidth()).toEqual(10);
    });
  });
});