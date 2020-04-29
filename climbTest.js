it("Tells you the distance you completed", function () {
    var climb = new Climb(10, 5);
    assert.isEqual(climb.time, 5);
  });