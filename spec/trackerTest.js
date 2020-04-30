it('can show me my climbs', function(){
    let tracker = new Tracker();
    let climb = new Climb("Tough one",10,5);
    tracker.climbs.push(climb);
    wilson.isEqual(tracker.climbs[0].distance, 10);
});

it('Can create and store my climbs', function(){
    tracker = new Tracker();
    tracker.newClimb("Tough one", 5, 10)
    wilson.isEqual(tracker.climbs[0].time, 10)
})
  

