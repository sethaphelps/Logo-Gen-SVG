const SVG = require("../lib/svg");

const { Triangle, Circle, Square } = require("../lib/shape")

describe("Circle", () => {
    it("creates a circle as the shape of the image", () => {
        const validateCircle = '<circle cx="150" cy="100" r="80" fill="yellow"/>';
        const circle = new Circle ()
        circle.setColor("yellow")
        const renderedSVG = circle.render()
        expect(renderedSVG).toEqual(validateCircle)
    }); 
})

describe("Triangle", () => {
    it("creates a triangle as the shape of the image", () => {
        const validateTriangle = '<polygon points="150, 18 244, 182 56, 182" fill="yellow"/>';
        const triangle = new Triangle ()
        triangle.setColor("yellow")
        const renderedSVG = triangle.render()
        expect(renderedSVG).toEqual(validateTriangle)
    })
})

describe("Square", () => {
    it("creates a square as the shape of the image", () => {
        const validateSquare = '<rect x="73" y="40" width="160" height="160" fill="yellow"/>';
        const square = new Square ()
        square.setColor("yellow")
        const renderedSVG = square.render()
        expect(renderedSVG).toEqual(validateSquare)
    })
})


