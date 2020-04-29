function Goal(title, description){
    this.title = title;
    this.description = description;
    this.allClimbingGoals = []
}

Goal.prototype.newClimbingGoal = function(proposedName, proposedDistance, proposedTime) {
    let name = proposedName
    let distance = proposedDistance
    let time = proposedTime
    newOne = new ClimbingGoal(name, distance, time);
    this.allClimbingGoals.push(newOne);
};
