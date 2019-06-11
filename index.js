class Circle {
    constructor(radius) {
        this.radius = radius;
      }

      get diameter(){
          return this.radius * 2
      }

      set diameter(newDiameter){
        this.radius = newDiameter/2  
    }

    get circumference(){
       return  Math.PI*(this.radius*2);
    }

    get area(){
        return Math.PI * (this.radius**2)
    }
    set circumference(newCircumference){
        return this.radius = newCircumference/(Math.PI*2)
    }
    // Diameter = radius • 2
    // Circumference = π • diameter
    // Area = π • radius2
}