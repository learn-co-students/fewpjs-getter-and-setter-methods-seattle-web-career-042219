class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  get diameter() {
    return this.radius * 2;
  }

  set diameter(diameter) {
    this.radius = diameter / 2;
  }

  get circumference() {
    return 2 * this.radius * Math.PI;
  }

  set circumference(circumference) {
    this.radius = circumference / (Math.PI * 2);
  }

  get area() {
    return Math.PI * this.radius * this.radius;
  }

  set area(area) {
    this.radius = Math.sqrt(area / Math.pi);
  }
}
