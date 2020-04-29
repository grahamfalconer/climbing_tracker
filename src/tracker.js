function Tracker () {
    this.climbs = []
}

Tracker.prototype.showClimbs = function() {
    console.log(this.climbs[0].attempt)
}



