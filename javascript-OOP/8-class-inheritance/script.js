// Inheritance Class
// pewarisan dari class

// membuat Class biasa
class Employee {
  // Membuat Method
  sayHello(nama) {
    console.log(`Hi ${nama}, my name is Employee ${this.name}. my age is ${this.age}`);
  }
}

// membuat pewarisan dari class Employe dengan menggunakan kata kunci extends
class Manager extends Employee {
  // Membuat Method
  // jika class manager tidak mempunyai method sayHello maka dia akan menggunakan method sayHello yang ada di class Employee
  sayHello(nama) {
    console.log(`Hi ${nama}, my name is Manager ${this.name}. my age is ${this.age}`);
  }
}

const ikbar = new Employee();
const rusdi = new Manager();

// property name dan age akan masuk kedalam method sayHello() di console.log(this.nama)
ikbar.name = "ikbar";
ikbar.age = 18;

rusdi.name = "rusdi";
rusdi.age = 17;

ikbar.sayHello("tipang");
rusdi.sayHello("tipang");

console.log(ikbar);
console.log(rusdi);
