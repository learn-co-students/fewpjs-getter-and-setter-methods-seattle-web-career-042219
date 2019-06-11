// Add your Circle class here

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }

  get circumference() {
    return Math.PI * this.diameter;
  }

  get area() {
    return Math.pow(this.radius, 2) * Math.PI;
  }

  set diameter(newDiameter) {
    this.radius = newDiameter / 2;
  }

  set circumference(circum) {
    this.radius =  (circum / 2 ) / Math.PI;
  }

  set area(area) {
    this.radius = Math.sqrt(area / Math.PI);
  }
}
