// Write a JavaScript program that creates a class called
// "Shape" with a method to calculate the area. Create two subclasses
// "Circle" and "Triange" that inherit from the "Shape" class and 
// override the area calculation method. Create an instance of the 
// "Circle" class and calculate its area. Similarly, do the same for
// the "Triange" class

// Abstract class Shape, with an abstract method, calculateArea()
function Shape(){
    if(this.constructor === Shape){
        throw new Error("Abstract class Shape cannot be instantiated");
    }

    this.calculateArea = function (){
        throw new Error("calculateArea() method not implemented.");
    };
}

// Class Circle inherits class Shape and overrides area calculation method
function Circle(radius){
    Shape.call(this); // Inherit from Shape
    this.radius = radius;

    this.calculateArea = function(){
        return Math.PI * (Math.pow(this.radius, 2));
    }
}

// create instance of circle class and calculate its area
let myCircle = new Circle(5);
console.log(`myCircle area: ${myCircle.calculateArea()}`);

// Class Triangle inherits class Shape and overrides area calculation method
function Triangle(height, base){
    Shape.call(this); // Inherit from shape
    this.height = height;
    this.base = base;

    this.calculateArea = function(){
        return this.base * this.height * 0.5;
    }
}

// create an instance of triangle class and calculate its area
let myTriangle = new Triangle(4, 5);
console.log(`myTriangle area: ${myTriangle.calculateArea()}`);
