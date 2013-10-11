/*
 * This file is a template for create specification
 *
 */
define(["Events"], function(events) {

  describe("Events", function() {
    
    it("should extend an object with event", function() {
      var object = {},
          action = jasmine.createSpy("action");
      _.extend(object, events);
      object.on('expand', action);
      object.trigger('expand');
      
      expect(action).toHaveBeenCalled();
    });
    
    it("test", function() {
      var object = {},
          object2 = {},
          action1 = jasmine.createSpy("action1"),
          action2 = jasmine.createSpy("action2"),
          action3 = jasmine.createSpy("action3");
          
      _.extend(object, events);
      _.extend(object2, events);
      object.on('use:toto', action1);
      object.on('use:tata', action2);
      
      object2.listenTo(object, 'use:tata', action3);
      
      object.trigger('use:toto use:tata');
      
      expect(action1).toHaveBeenCalled();
      expect(action2).toHaveBeenCalled();
      expect(action3).toHaveBeenCalled();
    });
  });
});