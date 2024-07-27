const inquirer = require('inquirer');


function createSVG() {
inquirer

.prompt {[
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
message: "Enter a color keyword (ora hexadecimal number) for text color",
name: "text_color",
           },
 //    WHEN I am prompted for a shape
 //    THEN I am presented with a list of shapes to choose from: circle, triangle, and square     
 {
type: 'list',
message: colors.brightMagenta('What licensing did you use?'),
name: 'licensing',
choices: ['circle', 'triangle', 'square']
},
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
{
type: "input",
message: "Enter a color keyword (ora hexadecimal number) for shape color",
name: "shape_color",
       },
    
] .then((data) => {
    const logo_render = 

// Logo build


})
}
}