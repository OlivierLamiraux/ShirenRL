
define(["GameLoop"], function(GameLoop) {

  describe("GameLoop", function() {
    var gameLoop;
    
    beforeEach(function () {
      gameLoop = new GameLoop();
      
    });
    
    it("should tell who act this turn", function() {
      var actor1 = { getSpeed : function() { return 1; }},
          actor2 = { getSpeed : function() { return 1; }};
          
      gameLoop.addActor(actor1);
      gameLoop.addActor(actor2);
      
      var turn = gameLoop.turn();
      
      expect(turn).toEqual([actor1, actor2]);
    });
    
    it("should tell who act this turn with speed", function() {
      var actor1 = { getSpeed : function() { return 0; }},
          actor2 = { getSpeed : function() { return 1; }},
          actor3 = { getSpeed : function() { return 2; }};
          
      gameLoop.addActor(actor1);
      gameLoop.addActor(actor2);
      gameLoop.addActor(actor3);
      
      var turn1 = gameLoop.turn(),
          turn2 = gameLoop.turn(),
          turn3 = gameLoop.turn(),
          turn4 = gameLoop.turn();
      
      console.log("3", turn3);
      expect(turn1).toEqual([actor1], "turn 1");
      expect(turn2).toEqual([actor1, actor2], "turn 2");
      expect(turn3).toEqual([actor1, actor3], "turn 3");
      expect(turn4).toEqual([actor1, actor2], "turn 4");
    });
  });
});