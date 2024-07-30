// Import necessary modules
const inquirer = require("inquirer"); // Module for prompting user input
const colors = require('colors'); // Module for adding colors to the console output
const fs = require('fs'); // Module for file system operations
const { Circle, Triangle, Square,} = require('./lib/shapes'); // Import shape classes from shapes module

// Function to create an SVG logo based on user input
function createSVG() {
  // Use inquirer to prompt the user for input
  inquirer
    .prompt([
      {
        type: "input",
        message: "Select three letters for your SVG Logo.",
        name: "text", // Name of the input to be referenced later
      },
      {
        type: "input",
        message: colors.brightMagenta("Enter a color keyword (or a hexadecimal number) for text color"),
        name: "text_color", // Name of the input to be referenced later
      },
      {
        type: "list",
        message: "Pick a shape for your logo.",
        name: "shape", // Name of the input to be referenced later
        choices: ["circle", "triangle", "square"], // Options for the shape selection
      },
      {
        type: "input",
        message: colors.brightMagenta("Enter a color keyword (or a hexadecimal number) for shape color"),
        name: "shape_color", // Name of the input to be referenced later
      },
    ])
    .then((output) => {
      // Destructure the user input from the output object
      const { text, text_color, shape, shape_color } = output;
      console.log(output);

      let svg;
      // Determine the shape selected by the user and create an instance of the corresponding class
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

      // Render the SVG content using the selected shape's render method
      const svg_render = svg.render();

      // Write the generated SVG content to a file named logo.svg
      fs.writeFile("examples/logo.svg", svg_render, (err) =>
        err ? console.error(err) : console.log("Generated logo.svg")
      );
    });
}

// Call the function to start the SVG creation process
createSVG();
