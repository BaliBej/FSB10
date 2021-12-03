// app.js
const square = new Square(2);
square.sayName();
console.log(square.area());
console.log(new Square().area());

import Square from "./Square";

// Polygon.js
class Polygon {
    constructor(height, width) {
        this.name = "Polygon";
        this.height = height;
        this.width = width;
    }

    area() {
        return this.height * this.width;
    }

    sayName() {
        console.log("Cześć jestem", this.name + ".");
    }
}

export default Polygon;


// Square.js
import Polygon from "./Polygon";

class Square extends Polygon {
    constructor(dim = 5) {
        super(dim, dim);
        this.name = "Square";
    }
}

export default Square;
