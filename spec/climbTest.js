it('Can store distance you have walked', function() {
  let climb = new Climb(10, 5);
  wilson.isEqual(climb.distance, 10)
});

it('Can tell you a climb summary', function (){
  let climb = new Climb(10,5);
  wilson.isEqual(climb.attempt, "You did: 10, in 5")
})

