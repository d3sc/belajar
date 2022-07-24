// Constructor Inheritance
// keuntungan menggunakan constructor inheritance adalah : jika pada saat ingin menggunakan banyak function ke dalam constructor funct, tidak perlu mengganti function yang lain nya, cukup 1 funct saja.
// karena funtion yang diubah akan mengikuti inti function yang digunakan.

function Employee(firstName) {
  (this.firstName = firstName),
    (this.sayhello = function (name) {
      console.log(`hello ${name}, my name is ${this.firstName}.`);
    });
}

function Manager(firstName, lastName) {
  this.lastName = lastName;
  // * memanggil constructor funct, lalu menampilkan isinya ke function ini. (harus menggunakan call)
  Employee.call(this, firstName);
}

const ikbar = new Manager("ikbar", "rabbani");

console.log(ikbar);
