// Prototype adalah parent class. contohnya seperti, object Player memiliki parent nya yaitu prototype. begitu juga dengan semuanya.

function Player(nama, energi) {
  // Player adalah Object dan semua object itu mempunyai prototype.
  //   let player = Object.create(Player.prototype); // jika menggunakan construction function akan otomatis dibuatkan object.create(nama object.prototype).
  this.nama = nama;
  this.energi = energi;

  //   return this; // dan akan otomatis dibuatkan return this;
}

// memanfaatkan prototype yang dibuat dari object di atas
Player.prototype.main = function (jam) {
  this.energi -= jam;
  console.log(`halo ${this.nama}, selamat bermain. ` + `sisa energi ` + this.energi);
};
Player.prototype.makan = function (porsi) {
  this.energi += porsi;
  console.log(`halo ${this.nama}, selamat makan. ` + `sisa energi ` + this.energi);
};
Player.prototype.tidur = function (jam) {
  this.energi += jam * 2;
  console.log(`halo ${this.nama}, selamat tidur. ` + `sisa energi ` + this.energi);
};

//  dengan metode class
// class Player {
//   constructor(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//   }
//   main(jam) {
//     this.energi -= jam;
//     alert(`halo ${this.nama}, selamat bermain. ` + `sisa energi ` + this.energi);
//   }
//   makan(porsi) {
//     this.energi += porsi;
//     alert(`halo ${this.nama}, selamat makan. ` + `sisa energi ` + this.energi);
//   }
//   tidur(jam) {
//     this.energi += jam * 2;
//     alert(`halo ${this.nama}, selamat tidur. ` + `sisa energi ` + this.energi);
//   }
// }

let player1 = new Player("ikbar", 15);
let player2 = new Player("rabbani", 25);
