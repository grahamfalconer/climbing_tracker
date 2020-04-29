it('can show me my climbs', function(){
    let tracker = new Tracker();
    let climb = new Climb(10,5);
    tracker.climbs.push(climb);
    wilson.isEqual(tracker.climbs, "10");
})
