it('Goal has a title', function(){
    let goal = new Goal("Tackling the tough one");
    wilson.isEqual(goal.title, "Tackling the tough one")
})
it('Goal has a description', function(){
    let goal= new Goal("Tackling the tough one", "My new shoes should help me");
    wilson.isEqual(goal.description, "My new shoes should help me")
})
it('climbing goals can be created and shown on goals', function(){
    let goal = new Goal("Tackling the tough one", "My new shoes should help me");
    goal.newClimbingGoal("Tough one", 5, 10);
    wilson.isEqual(goal.goalAttempt, "You completed Tough One 5m, in 10")
})


