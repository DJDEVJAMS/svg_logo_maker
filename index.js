const inquirer = require("inquirer");
const colors = require('colors');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

function createSVG() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Select three letters for your SVG Logo.",
        name: "text",
      },
      {
        type: "input",
        message: colors.brightMagenta("Enter a color keyword (or a hexadecimal number) for text color"),
        name: "text_color",
      },
      {
        type: "list",
        message: "Pick a shape for your logo.",
        name: "shape",
        choices: ["circle", "triangle", "square"],
      },
      {
        type: "input",
        message: colors.brightMagenta("Enter a color keyword (or a hexadecimal number) for shape color"),
        name: "shape_color",
      },
    ])
    .then((output) => {
      const { text, text_color, shape, shape_color } = output;
      console.log(output)

      let svg;
      switch (shape) {
        case 'circle':
          svg = new Circle(text, text_color, shape, shape_color);
          break;
        case 'triangle':
          svg = new Triangle(text, text_color, shape, shape_color);
          break;
        case 'square':
          svg = new Square(text, text_color, shape, shape_color);
          break;
      }

      const svg_render = svg.render();

      fs.writeFile("examples/logo.svg", svg_render, (err) =>
        err ? console.error(err) : console.log("Generated logo.svg")
      );
    });
}

createSVG();