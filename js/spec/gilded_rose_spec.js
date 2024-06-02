describe("Gilded Rose", function() {

  it("should decrease quality and sell_in at the end of the day for normal items", function() {
    items = [ new Item("+5 Dexterity Vest", 10, 20) ];
    update_quality();
    expect(items[0].sell_in).toEqual("9");
    expect(items[0].quality).toEqual("19");
  });

});
