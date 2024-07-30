
class Shape {
    constructor(textABC, textColor, shape, shapeColor) {
        this.textABC = textABC;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }

    render() {
    }

    name(textColor, textABC) {
        const textString = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${textABC}</text>`;
        return textString;
    }
}

//circle class
class Circle extends Shape {
    constructor(textABC, textColor, shape, shapeColor) {
        super(textABC, textColor, shape, shapeColor);
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><${this.shape} cx="150" cy="100" r="80" fill="${this.shapeColor}" />${this.name(this.textColor, this.textABC)}</svg>`;
    }

}

//triangle class
class Triangle extends Shape {
    constructor(textABC, textColor, shape, shapeColor) {
        super(textABC, textColor, shape, shapeColor);
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150 10, 50 190, 250 190" fill="${this.shapeColor}" />${this.name(this.textColor, this.textABC)}</svg>`;
    }

}

//square class
class Square extends Shape {
    constructor(textABC, textColor, shape, shapeColor) {
        super(textABC, textColor, shape, shapeColor);
    }

    render() {
          return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" x="50" y="0" fill="${this.shapeColor}" />${this.name(this.textColor, this.textABC)}</svg>`;
    }

}

//export shape method
module.exports = { Circle, Triangle, Square };