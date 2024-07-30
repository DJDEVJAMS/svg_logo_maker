const { Shape, Circle, Triangle, Square } = require('./shapes'); 


describe('Shape Classes', () => {
    describe('Shape', () => {
        test('should create a Shape instance with the correct properties', () => {
            const shape = new Shape('ABC', 'red', 'shape', 'blue');
            expect(shape.textABC).toBe('ABC');
            expect(shape.textColor).toBe('red');
            expect(shape.shape).toBe('shape');
            expect(shape.shapeColor).toBe('blue');
        });

        test('name method should return correct SVG text element', () => {
            const shape = new Shape('ABC', 'red', 'shape', 'blue');
            const expectedText = '<text x="150" y="125" font-size="60" text-anchor="middle" fill="red">ABC</text>';
            expect(shape.name('red', 'ABC')).toBe(expectedText);
        });
    });

    describe('Circle', () => {
        test('should create a Circle instance and render correct SVG', () => {
            const circle = new Circle('ABC', 'red', 'circle', 'blue');
            const expectedSVG = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="70" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">ABC</text></svg>';
            expect(circle.render()).toBe(expectedSVG);
        });
    });

    describe('Triangle', () => {
        test('should create a Triangle instance and render correct SVG', () => {
            const triangle = new Triangle('ABC', 'red', 'polygon', 'blue');
            const expectedSVG = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150 20, 70 180, 230 180" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">ABC</text></svg>';
            expect(triangle.render()).toBe(expectedSVG);
        });
    });

    describe('Square', () => {
        test('should create a Square instance and render correct SVG', () => {
            const square = new Square('ABC', 'red', 'rect', 'blue');
            const expectedSVG = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="180" height="180" x="60" y="10" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">ABC</text></svg>';
            expect(square.render()).toBe(expectedSVG);
        });
    });
});
