it('Can give distance you have climbed', function() {
  let climb = new Climb("Tough one",10,5);
  wilson.isEqual(climb.distance, 10)
});

xit('Can give you a climb summary', function (){
  let climb = new Climb("Tough one",5,10);
  wilson.isEqual(climb.attempt, "You completed Tough One 5m, in 10")
});

it('I can give climbs a name', function(){
  let climb = new Climb("Tough one",10,5);
  wilson.isEqual(climb.name, "Tough one")
})

