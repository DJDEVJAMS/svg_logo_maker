const inquirer = require("inquirer");
const colors = require('colors');
const fs = require('fs');
const { Circle, Triangle, Square } = require("lib/shapes.js");

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

      let logo;
      switch (shape) {
        case 'circle':
          logo = new Circle(text, text_color, shape, shape_color);
          break;
        case 'triangle':
          logo = new Triangle(text, text_color, shape, shape_color);
          break;
        case 'square':
          logo = new Square(text, text_color, shape, shape_color);
          break;
      }

      const logo_render = logo.render();

      fs.writeFile("examples/logo.svg", logo_render, (err) =>
        err ? console.error(err) : console.log("Generated logo.svg")
      );
    });
}

createSVG();