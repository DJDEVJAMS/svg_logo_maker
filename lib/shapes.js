// Define a base class Shape
class Shape {
    constructor(textABC, textColor, shape, shapeColor) {
        // Initialize properties common to all shapes
        this.textABC = textABC;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }

    // A placeholder render method to be overridden by subclasses
    render() {
    }

    // Method to create an SVG text element
    name(textColor, textABC) {
        // SVG text element with specified color and text content
        const textString = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${textABC}</text>`;
        return textString;
    }
}

// Define a Circle class that extends Shape
class Circle extends Shape {
    constructor(textABC, textColor, shape, shapeColor) {
        // Call the parent class constructor
        super(textABC, textColor, shape, shapeColor);
    }

    // Override the render method to create an SVG for a circle
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><${this.shape} cx="150" cy="100" r="80" fill="${this.shapeColor}" />${this.name(this.textColor, this.textABC)}</svg>`;
    }
}

// Define a Triangle class that extends Shape
class Triangle extends Shape {
    constructor(textABC, textColor, shape, shapeColor) {
        // Call the parent class constructor
        super(textABC, textColor, shape, shapeColor);
    }

    // Override the render method to create an SVG for a triangle
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150 10, 50 190, 250 190" fill="${this.shapeColor}" />${this.name(this.textColor, this.textABC)}</svg>`;
    }
}

// Define a Square class that extends Shape
class Square extends Shape {
    constructor(textABC, textColor, shape, shapeColor) {
        // Call the parent class constructor
        super(textABC, textColor, shape, shapeColor);
    }

    // Override the render method to create an SVG for a square
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" x="50" y="0" fill="${this.shapeColor}" />${this.name(this.textColor, this.textABC)}</svg>`;
    }
}

// Export the Circle, Triangle, and Square classes for use in other modules
module.exports = { Circle, Triangle, Square, Shape };
