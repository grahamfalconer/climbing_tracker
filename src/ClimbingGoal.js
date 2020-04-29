function ClimbingGoal(name, distance, time){
    this.name = name;
    this.distance = distance;
    this.time = time;
    this.attempt = "Your proposed climb : " + name + ", is " + distance + "m in distance. \n You intend to complete it in: " + time;
}