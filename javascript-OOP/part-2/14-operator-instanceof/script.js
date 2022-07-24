// Operator instanceof
// mengecek apakah sebuah object merupakan instance dari class tertentu/bukan.
// akan mengembalikan nilai boolean
// instanceof juga mengecek keturunan dari class

class Employee {}

// class Manager {}

class Manager extends Employee {}

const budy = new Employee();
const ikbar = new Manager();

console.log(budy instanceof Employee); /* True */
console.log(budy instanceof Manager); /* False */

console.log(ikbar instanceof Employee); /* True */
console.log(ikbar instanceof Manager); /* True */ /* Karena Manager adalah turunan dari Employee maka bisa jadi true */
