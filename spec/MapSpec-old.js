describe("Map", function() {
  it("should be create with width and height", function() {
    var map = new AFRO.Map(10, 10);
    
    expect(map.height).toEqual(10);
    expect(map.width).toEqual(10);
  });
});