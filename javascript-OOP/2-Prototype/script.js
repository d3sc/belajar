function Person(a, b) {
  // ini adalah object instance
  (this.firstName = a),
    (this.lastName = b),
    (this.sayHello = function (name) {
      console.log(`hello ${name}, and my name is ${this.firstName}.`);
    });
}

// jika menambah property pada prototype maka dia akan bertambah ke _proto_ bukan ke object instance.
// contoh : Person.prototype.sayBye = function() {
// console.log('good bye');
// }

// Menambahkan method pada prototype Person
Person.prototype.run = function () {
  console.log(this.firstName + " is running!");
};

const ikbar = new Person("ikbar", "rabbani");
const budy = new Person("budy", "haliman");

// membuat method yang dipasang di instance object lalu di panggil dibawah.
budy.run = function () {
  console.info(this.firstName + " pernah makan bakso?");
};

// Memanggil prototype di atas instance object, karena di dalam instance object ikbar tidak ada method run makanya dia naik ke prototype lalu menemukan method run().
ikbar.run();
// memanggil method yang dibuat di instance obect, karena method run sudah ada di dalam di dalam instance object jadi tidak perlu naik ke atas untuk mengecek prototype
budy.run();

console.log(ikbar);
console.log(budy);
