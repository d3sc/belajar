// Public Class Field

class Costumer {
  // Public field
  //   Keutungan menggunakan public field adalah, kita tidak perlu repot repot untuk membuat constructor
  firstName;
  lastName;
  //   balance = 0; jika ingin langsung memasukkan value
  balance = 0;

  // Constructor

  // Method
}

const ikbar = new Costumer("ikbar", "rabbani");
const budy = new Costumer();

ikbar.firstName = "tipang";
budy.firstName = "ulip";

console.log(ikbar);
console.log(budy);
