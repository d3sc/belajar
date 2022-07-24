// 1. Constructor Function

// namanya diawali dengan huruf kapital
// menambahkan argument pada funct Person.
function Person(a, b) {
  // firstName adalah salah satu dari property.
  (this.firstName = a),
    (this.lastName = b),
    // properti yang berisi function di dalam object disebut method.
    (this.sayHello = function (name) {
      console.log(`hello ${name}, and my name is ${this.firstName}.`);
    });
}

// menambahkan parameter di constructor funct.
const ikbar = new Person("ikbar", "rabbani");
// menambahkan Properti di dalam object yang ingin dibuat dan memberikan value nya.
// ikbar.firstName = "ikbar";
// ikbar.lastName = "rabbani";
ikbar.sayHello("joko");

const budy = new Person("budy", "haliman");
budy.sayHello("joko");

console.log(ikbar);
console.log(budy);
