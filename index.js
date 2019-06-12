class Circle {

  constructor(radius){
    this.radius = radius;
  }

  set diameter(diameter) {
    const pi = Math.PI;
    this.radius = diameter / 2;
  }

  set circumference(circumference) {
    const pi = Math.PI;
    this.radius = (circumference / pi) / 2;
  }

  set area(area) {
    const pi = Math.PI;
    this.radius = Math.sqrt(area / pi);
  }

  get diameter() {
    const pi = Math.PI;
    return this.radius * 2;
  }

  get circumference() {
    const pi = Math.PI;
    return this.radius * 2 * pi;
  }

  get area() {
    const pi = Math.PI;
    return this.radius * pi * this.radius;
  }
}
