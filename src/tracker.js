function Tracker () {
    this.climbs = []
}

Tracker.prototype.newClimb = function(climbName, distanceClimbed, timeTaken) {
    let name = climbName
    let distance = distanceClimbed
    let time = timeTaken
    newOne = new Climb(name, distance, time);
    this.climbs.push(newOne);
}
