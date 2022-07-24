// Super Method
// kata kunci super tidak hanya untuk constructor saja
// memanggil referensi dari method yang ada di parent class

class Shape {
  paint() {
    console.log("Paint Shape");
  }
}

class Circle extends Shape {
  // kata kunci super tidak bisa dipasang diluar method dan constructor (tidak bisa digunakan di luar {})
  paint() {
    super.paint(); /* memanggil super method yang ada di parent class */
    console.log("halo");
  }
}

let shape = new Shape();
shape.paint();

let circle = new Circle();
circle.paint();
