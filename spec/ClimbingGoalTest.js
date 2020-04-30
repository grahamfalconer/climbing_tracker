it('Can show distance you want to climb', function() {
    let climbingGoal = new ClimbingGoal("Tough one",10,5);
    wilson.isEqual(climbingGoal.distance, 10)
});
  
xit('Can give you a summary of your climbing goal', function (){
let climbingGoal = new ClimbingGoal("Tough one",5,10);
wilson.isEqual(climbingGoal.attempt, "Your proposed climb: Tough one, is 5m in distance. You intend to complete it in: 10")
});

it('Can give climbing goals a name', function(){
let climbingGoal = new ClimbingGoal("Tough one",10,5);
wilson.isEqual(climbingGoal.name, "Tough one")
});

it('Can give climbing goals a target time', function(){
    let climbingGoal = new ClimbingGoal("Tough one",10,5);
    wilson.isEqual(climbingGoal.time, 5)
});


  