const inquirer = require("inquirer");

const SVG = require("./lib/svg");

const { Triangle, Circle, Square } = require("./lib/shape");

const { writeFile } = require("fs/promises");

function createShape() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter up to three characters.",
        name: "characters",
        validate: (characters) =>
          characters.length <= 3 || "Please choose between 1 and 3 characters.",
      },
      {
        type: "input",
        message: "What color would you like the text for you logo?",
        name: "textColor",
      },
      {
        type: "list",
        message: "Choose one of the shapes for your image.",
        name: "shape",
        choices: ["circle", "triangle", "square"],
      },
      {
        type: "input",
        message: "What color would you like your shape?",
        name: "shapeColor",
      },
    ])
    .then(({ characters, textColor, shape, shapeColor }) => {
      var shape;
      switch (shape) {
        case "circle":
          shape = new Circle();
          break;
        case "triangle":
          shape = new Triangle();
          break;
        case "square":
          shape = new Square();
          break;
      }
      shape.setColor(shapeColor);
      const svg = new SVG();
      svg.setText(characters, textColor);
      svg.setShape(shape);
      return writeFile("logo.svg", svg.render());
    })
    .catch((err) => {
      console.log(err);
    });
}

createShape();