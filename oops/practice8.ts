abstract class Shape{
    abstract calculateArea:void;
}
class Rectangle extends Shape {
    length: number;
    width: number;
    constructor(length: number, width: number) {
        super();
        this.length = length;
        this.width = width;
    }
    calculateArea() {
        console.log(this.length * this.width);
    }
}
let r1 = new Rectangle(5, 3);
r1.calculateArea();