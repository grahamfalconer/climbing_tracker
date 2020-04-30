function Tracker () {
    this.climbs = []
    this.allClimbingGoals = []
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

