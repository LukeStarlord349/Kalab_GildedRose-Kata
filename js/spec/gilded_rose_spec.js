describe("Gilded Rose", function() {

  it("should decrease quality and sell_in at the end of the day for normal items", function() {
    items = [ new Item("+5 Dexterity Vest", 10, 20) ];
    update_quality();
    expect(items[0].sell_in).toEqual(9);
    expect(items[0].quality).toEqual(19);
  });

  it("should increase quality of 'Aged Brie' as it gets older", function() {
    items = [ new Item("Aged Brie", 2, 0) ];
    update_quality();
    expect(items[0].quality).toEqual(1);
  });

  it("should not decrease quality of 'Sulfuras'", function() {
    items = [ new Item("Sulfuras", 0, 80) ];
    update_quality();
    expect(items[0].quality).toEqual(80);
  });

});
