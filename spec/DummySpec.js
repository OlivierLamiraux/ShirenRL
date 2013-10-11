/*
 * This file is a template for create specification
 *
 */
define(["Dummy"], function(Dummy) {

  describe("Dummy", function() {
    var dummy;
    
    beforeEach(function () {
      dummy = new Dummy();
      
    });
    
    it("should be true", function() {
      expect(true).toEqual(true);
    });
  });
});