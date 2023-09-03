const Car = function() {
    this.tank = 0;
    this.odometer = 0;
}

Car.prototype.fill = function(gallons) {
    this.tank += gallons;
}

Car.prototype.drive = function(distance) {
    if (this.tank < distance)
        return `I ran out of fuel at ${this.tank} miles!`;

    this.tank -= distance;
    this.odometer += distance;
}
