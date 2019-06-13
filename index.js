// Add your Circle class here
class Circle {
	constructor(radius) {
		this.radius = radius
	}

	get diameter() {
		return this.radius * 2;
	}

	get circumference() {
		return this.radius * 2 * Math.PI;
	}

	get area() {
		return this.radius * this.radius * Math.PI;
	}

	set diameter(diameter) {
		this.radius = diameter / 2;
	}

	set circumference(circumference) {
		this.radius = circumference / 2 / Math.PI;
	}

	set area(area) {
		let radiusSq = area / Math.PI;
		this.radius = Math.sqrt(radiusSq);
	}
}