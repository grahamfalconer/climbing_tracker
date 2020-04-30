it('can show me my climbs', function(){
    let tracker = new Tracker();
    let climb = new Climb("Tough one",10,5);
    tracker.climbs.push(climb);
    wilson.isEqual(tracker.climbs[0].distance, 10);
});

it('Can create and store my climbs', function(){
    tracker = new Tracker();
    tracker.newClimbingGoal("Tough one", 5, 10);
    wilson.isEqual(tracker.climbs[0].time, 10)
});
  
it('It compares a climb and a goal and if they are the same it returns: you met your goal', function(){
    tracker = new Tracker();
    climb1 = tracker.newClimb("Tough one", 5, 10);
    goal1 = tracker.newGoal("Tough one", 5, 10);
    wilson.isEqual(tracker.progressSummary(climb1, goal1), "You met your goal!")
});

it('Can show me my current goal', function(){
    tracker = new Tracker();
    tracker.setCurrentGoal();
    wilson.isEqual(tracker.currentGoal(), "Tough one")
});





