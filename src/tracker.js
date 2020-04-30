function Tracker () {
    this.climbs = []
    this.allClimbingGoals = []
    this.currentGoal = []
    this.entry_message = "Welcome! \n your current goal is: " + this.currentGoal + "."
}

Tracker.prototype.newClimb = function(climbName, distanceClimbed, timeTaken) {
    let name = climbName
    let distance = distanceClimbed
    let time = timeTaken
    newOne = new Climb(name, distance, time);
    this.climbs.push(newOne);
}

Tracker.prototype.newClimbingGoal = function(proposedName, proposedDistance, proposedTime) {
    let name = proposedName
    let distance = proposedDistance
    let time = proposedTime
    newOne = new ClimbingGoal(name, distance, time);
    this.allClimbingGoals.push(newOne);
};


Tracker.prototype.setCurrentGoal = function(){
    this.currentGoal = []
    this.currentGoal.push(this.allClimbingGoals[0].name)
};

Tracker.prototype.stateCurrentGoal = function(){
    return this.currentGoal[0]
}

