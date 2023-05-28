class SVG {
  constructor() {
    this.text = "";
    this.shape = "";
  }
 render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`;
  }
  setText(text, color) {
    this.text = `<text x="150" y="115" font-size="50" text-anchor="middle" fill="${color}">${text}</text>`;
  }
  setShape(shape) {
    this.shape = shape.render();
  }
}

module.exports = SVG;
