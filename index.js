const inquirer = require("inquirer");
const colors = require('colors');
const fs = require('fs');
//const render = require(lib/shapes.js);

function createSVG() {
  inquirer

    .prompt([
      // WHEN I am prompted for text
      // THEN I can enter up to three characters
      {
        type: "input",
        message: "Select three letters for your SVG Logo.",
        name: "text",
      },
      // WHEN I am prompted for the text color
      // THEN I can enter a color keyword (OR a hexadecimal number)
      {
        type: "input",
        message: colors.brightMagenta(
          "Enter a color keyword (or a hexadecimal number) for text color"
        ),
        name: "text_color",
      },
      // WHEN I am prompted for a shape
      // THEN I am presented with a list of shapes to choose from: circle, triangle, and square
      {
        type: "list",
        message: "Pick a shape for your logo.",
        name: "shape",
        choices: ["circle", "triangle", "square"],
      },
      // WHEN I am prompted for the shape's color
      // THEN I can enter a color keyword (OR a hexadecimal number)
      {
        type: "input",
        message: colors.brightMagenta(
          "Enter a color keyword (or a hexadecimal number) for shape color"
        ),
        name: "shape_color",
      },
    ])
    .then((data) => {
      const make_shape = render(data.shape);
      const logo_render =
        // Logo build

        `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
  <polygon points="150, 18 244, 182 56, 182" fill="${data.shape_color}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.text_color}">${date.text}</text>

</svg>`;

      fs.writeFile("/examples/log.svg", readmeContent, (err) =>
        err ? console.error(err) : console.log("Generated logo.svg")
      );
    });
}

createSVG();
