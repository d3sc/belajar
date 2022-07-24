// Super Constructor
// lebih bagus dari contructor biasa
//* jika kita mengakses super sebenarnya itu adalah referensi dari parent prototype nya / parent class nya
// ! Super belum bisa dipanggil 2 kali dalam satu method

// membuat Class biasa
class Employee {
  //* Secara otomatis jika membuat constructor maka dia akan dimiliki oleh semua turunan nya (extends), contoh disini adalah manager adalah turunan nya.

  // Membuat parameter name dan age dalam class menggunakan constructor
  constructor(name) {
    // ini adalah teknik untuk memasang parameter
    // setiap nilai yang masuk di dalam parameter name akan diubah menjadi this.name
    this.name = name;
  }

  // Membuat Method
  sayHellos(nama) {
    console.log(`Hi ${nama}, my name is Employee ${this.name}.`);
  }
}

// membuat pewarisan dari class Employe dengan menggunakan kata kunci extends
class Manager extends Employee {
  //* Jika class manager tidak mempunyai constructor maka dia akan mengambil constructor dari Employee

  // Jika parameter yang dituliskan di dalam constructor mirip dengan parent nya (kalau disini cLass Employee), maka harus menggunakan kata kunci super.
  //! super tidak boleh ditambahkan di dalam method
  constructor(name, age) {
    // name sudah ada di dalam paramter constructor yang ada di class Employee, maka harus menggunakan kata kunci super.
    //* kalaupun parent nya tidak mempunyai constructor tetap wajib menggunakan super jika ingin memasang di child nya.
    super(name);
    this.age = age;
  }

  // Membuat Method
  // jika class manager tidak mempunyai method sayHello maka dia akan menggunakan method sayHello yang ada di class Employee
  sayHello(nama) {
    console.log(`Hi ${nama}, my name is Manager ${this.name}. my age is ${this.age}.`);
  }
}

const ikbar = new Employee("ikbar", "upl");
const rusdi = new Manager("rusdi", 15, "ipl");

ikbar.sayHellos("tipang");
rusdi.sayHello("tipang");

console.log(ikbar);
console.log(rusdi);
