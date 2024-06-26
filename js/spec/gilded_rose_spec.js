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

  it("should not decrease quality of 'Sulfuras, Hand of Ragnaros'", function() {
    items = [ new Item("Sulfuras, Hand of Ragnaros", 0, 80) ];
    update_quality();
    expect(items[0].quality).toEqual(80);
  });

  it("should increase quality of 'Backstage passes to a TAFKAL80ETC concert' as sell_in value approaches", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20) ];
    update_quality();
    expect(items[0].quality).toEqual(21);
  });

  it("should not allow quality to be more than 50", function() {
    items = [ new Item("Aged Brie", 2, 50) ];
    update_quality();
    expect(items[0].quality).toEqual(50);
  });

  it("should not allow quality to be negative", function() {
    items = [ new Item("Elixir of the Mongoose", 2, 0) ];
    update_quality();
    expect(items[0].quality).toEqual(0);
    expect(items[0].sell_in).toEqual(1);
  });

  it("should not allow quality to be negative", function() {
    items = [ new Item("Elixir of the Mongoose", 2, 0) ];
    update_quality();
    expect(items[0].quality).toEqual(0);
    expect(items[0].sell_in).toEqual(1);
  });

  it("should increase the quality of 'Backstage passes to a TAFKAL80ETC concert' by 2, when sell_in ist 10 or less", function() {
      items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10) ];
      update_quality();
      expect(items[0].quality).toEqual(12);
      expect(items[0].sell_in).toEqual(9);
  });

  it("should increase the quality of 'Backstage passes to a TAFKAL80ETC concert' by 3, when sell_in ist 5 or less", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10) ];
    update_quality();
    expect(items[0].quality).toEqual(13);
    expect(items[0].sell_in).toEqual(4);
  });

  it("should degrade quality of 'Conjured' items twice as fast", function() {
    items = [ new Item("Conjured Mana Cake", 3, 6) ];
    update_quality();
    expect(items[0].quality).toEqual(4);
    expect(items[0].sell_in).toEqual(2);
  });

  //AI test cases:

  it("should degrade quality of 'Conjured' items twice as fast after sell_in", function() {
    items = [ new Item("Conjured Mana Cake", 0, 6) ];
    update_quality();
    expect(items[0].quality).toEqual(2);
  });

  it("should degrade quality of normal items twice as fast after sell_in", function() {
    items = [ new Item("+5 Dexterity Vest", 0, 20) ];
    update_quality();
    expect(items[0].quality).toEqual(18);
  });

  it("should not increase quality of 'Aged Brie' beyond 50", function() {
    items = [ new Item("Aged Brie", 2, 50) ];
    update_quality();
    expect(items[0].quality).toEqual(50);
  });

  it("should drop quality of 'Backstage passes' to 0 after the concert", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20) ];
    update_quality();
    expect(items[0].quality).toEqual(0);
  });

  it("should not change sell_in of 'Sulfuras'", function() {
    items = [ new Item("Sulfuras, Hand of Ragnaros", 0, 80) ];
    update_quality();
    expect(items[0].sell_in).toEqual(0);
  });

  it("should not decrease quality of 'Sulfuras'", function() {
    items = [ new Item("Sulfuras, Hand of Ragnaros", -1, 80) ];
    update_quality();
    expect(items[0].quality).toEqual(80);
  });

  it("should increase quality of 'Backstage passes' by 2 when sell_in is 10 days or less", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20) ];
    update_quality();
    expect(items[0].quality).toEqual(22);
  });

  it("should increase quality of 'Backstage passes' by 3 when sell_in is 5 days or less", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20) ];
    update_quality();
    expect(items[0].quality).toEqual(23);
  });

  it("should not change quality of 'Sulfuras' even after sell_in", function() {
    items = [ new Item("Sulfuras, Hand of Ragnaros", -1, 80) ];
    update_quality();
    expect(items[0].quality).toEqual(80);
  });

});
