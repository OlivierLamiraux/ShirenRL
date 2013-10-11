/*
 * This file is a template for create specification
 *
 */
define(["Game", "Hero"], function(Game, Hero) {

  describe("Game", function() {
    var game;
    
    beforeEach(function () {
      var hero = new Hero(),
          map = {};
      
      game = new Game(hero, map);
      
    });
    
    it("should be true", function() {
      expect(true).toEqual(true);
    });
  });
});