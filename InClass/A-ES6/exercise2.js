class Polygon {
  constructor(height, width) {
    this.name = "Polygon";
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log("Hi, I am a " + this.name);
  }
}

// let p = new Polygon("Polygon", 300, 400);
// p.sayName();
// console.log("The area of this polygon is " + p.area);

class Rectangle extends Polygon {
  constructor(height, width) {
    super(height, width);
    this.name = "Rectangle";
    this.sides = 4;
    // this.area = this.height * this.width;
  }
  get area() {
    return this.width * this.height;
  }
  sayName() {
    console.log("Hi I am a polygon and my name is " + this.name + ".");
  }
}

// let r = new Rectangle(50, 60);
// r.sayName();
// //r.area = 3;
// console.log("The area of this polygon is " + r.area);

//Create 2 new classes that extend from polygon: triangle and trapezoid and log their names and areas

class Triangle extends Polygon {
  constructor(height, width) {
    super(height, width);
    this.name = "Triangle";
    this.sides = 3;
    this.area = (this.width * this.height) / 2;
  }
  get areaRender() {
    console.log(`The area of this ${this.name} is ${this.area}`);
  }
  get sayName() {
    console.log(`Hi, I am a polygon and my name is ${this.name}.`);
  }
}

let tri = new Triangle(3, 3);
tri.sayName;
tri.areaRender;

class Trapezoid extends Polygon {
  constructor(width, base2, height) {
    super(height, width);
    this.base1 = width;
    this.base2 = base2;
    this.name = "Trapezoid";
    this.sides = 4;
    this.area = ((this.base1 + this.base2) * height) / 2;
  }
  get areaRender() {
    console.log(`The area of this ${this.name} is ${this.area}`);
  }
  get sayName() {
    console.log(`Hi, I am a polygon and my name is ${this.name}.`);
  }
}

let tra = new Trapezoid(30, 20, 10);
tra.sayName;
tra.areaRender;
