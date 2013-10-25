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
        mapCenter = function() { return { x : 3, y : 2}; };
    
    beforeEach(function () {
      game = new Game();
      game._map.loadAsciiMap(customMap);
    });
    
    it("can set hero position", function() {
      game.heroPosition(mapCenter());
      
      expect(game._heroPosition).toEqual(mapCenter());
    });
    
    it("should get the current screen view relative to the hero position", function() {
      game.heroPosition(mapCenter());
      expect(game.screen()).toEqual(customMap, "Hero in center");
      
      game.heroPosition({ x : 0, y : 0});
      expect(game.screen()).toEqual(customMap, "Hero in upper corner");
      
      game.heroPosition({ x : 6, y : 4});
      expect(game.screen()).toEqual(customMap, "Hero in down corner");
    });
    
    describe("have actors", function() {
      it("add actors", function() {
        var actor = { name : "Dummy" },
              at = { x : 0, x : 0 };
        game.addActor(actor, at);
        
        
      });
      
      describe("can get an actor by position", function() {
        it("when it is the player", function() {
          var hero = game.actorAt(game._heroPosition);
          
          expect(hero).toBe(game._hero);
        });
        
        it("when it is a mob", function() {
          var actor = { name : "Dummy" },
              at = { x : 0, x : 0 };
          game.addActor(actor, at);
          
          var actorResult = game.actorAt(at);
          
          expect(actorResult).toBe(actor);
        });
      });
    });
    
    describe("Player Move", function() {
      it("should move the hero", function() {
        game.heroPosition(mapCenter());
        game.heroMoveUp();
        expect(game._heroPosition).toEqual({ x : 2, y : 2}, 'Up');
        
        game.heroPosition(mapCenter());
        game.heroMoveDown();
        expect(game._heroPosition).toEqual({ x : 4, y : 2}, 'Down');
        
        game.heroPosition(mapCenter());
        game.heroMoveLeft();
        expect(game._heroPosition).toEqual({ x : 3, y : 1}, 'Left');
        
        game.heroPosition(mapCenter());
        game.heroMoveRight();
        expect(game._heroPosition).toEqual({ x : 3, y : 3}, 'Right');
        
        game.heroPosition(mapCenter());
        game.heroMoveUpLeft();
        expect(game._heroPosition).toEqual({ x : 2, y : 1}, 'UpLeft');
        
        game.heroPosition(mapCenter());
        game.heroMoveDownLeft();
        expect(game._heroPosition).toEqual({ x : 4, y : 1}, 'DownLeft');
        
        game.heroPosition(mapCenter());
        game.heroMoveUpRight();
        expect(game._heroPosition).toEqual({ x : 2, y : 3}, 'UpRight');
        
        game.heroPosition(mapCenter());
        game.heroMoveDownRight();
        expect(game._heroPosition).toEqual({ x : 4, y : 3}, 'DownRight');
      });
      
      it("should check if destination is passable", function() {
        spyOn(game._map , 'isPassable');
        game.heroMove({ x : -1, y : -1});
        
        expect(game._map.isPassable).toHaveBeenCalled();
        expect(game._map.isPassable.calls.length).toEqual(1);
      });
      
      it("should check passable one time for each move", function() {
        spyOn(game._map , 'isPassable');
        
        game.heroMoveUp();        // 1
        game.heroMoveDown();      // 2
        game.heroMoveLeft();      // 3
        game.heroMoveRight();     // 4
        game.heroMoveUpLeft();    // 5
        game.heroMoveDownRight(); // 6
        game.heroMoveDownLeft();  // 7
        game.heroMoveUpRight();   // 8
        
        expect(game._map.isPassable).toHaveBeenCalled();
        expect(game._map.isPassable.calls.length).toEqual(8);
      });
    });
  });
});