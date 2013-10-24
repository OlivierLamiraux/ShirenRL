/*
 * TODO : Dimention de l'ecran ?
 *
 */
define(["Game"], function(Game) {

  describe("Game", function() {
    var game,
        customMap = ["0123456",
                     ".1.....",
                     "..2@...",
                     "...3...",
                     "....4.."],
        mapCenter = { x : 3, y : 2};
    
    beforeEach(function () {
      game = new Game();
      game._map.loadAsciiMap(customMap);
    });
    
    it("can set hero position", function() {
      game.heroPosition(mapCenter);
      
      expect(game._heroPosition).toBe(mapCenter);
    });
    
    it("should get the current screen view relative to the hero position", function() {
      game.heroPosition(mapCenter);
      expect(game.screen()).toEqual(customMap, "Hero in center");
      
      game.heroPosition({ x : 0, y : 0});
      expect(game.screen()).toEqual(customMap, "Hero in upper corner");
      
      game.heroPosition({ x : 6, y : 4});
      expect(game.screen()).toEqual(customMap, "Hero in down corner");
    });
  });
});