function Tracker () {
    this.climbs = []
}

Tracker.prototype.newClimb = function(name, distance, time) {
    let name = name
    let distance = distance
    let time = time
    newOne = new Climb(name, distance, time);
    this.climbs.push(newOne);
}

