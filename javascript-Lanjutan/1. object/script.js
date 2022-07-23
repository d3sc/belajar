// cara membuat object pada javascript

// let adalah sebuah variable yang mirip dengan var
// PROBLEM = Tidak efektif untuk objek yang banyak
// 1. Object Literal

// let player1 = {
//   nama: "ikbar",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama}, selamat makan. ` + `sisa energi : ` + this.energi);
//   },
// };

// let player2 = {
//   nama: "rabbani",
//   energi: 20,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama}, selamat makan. ` + `sisa energi : ` + this.energi);
//   },
// };

//
// 2. Function Declaration
// awal nama functionya besar karena itu menandakan object
// kalau object di dalam function, propertinya bukan diberi : tetapi =

const methodMahasiswa = {
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`halo ${this.nama}, selamat makan` + ` sisa energi : ` + this.energi);
  },

  main: function (jam) {
    this.energi -= jam;
    console.log(`halo ${this.nama}, selamat ber main.` + ` sisa energi : ` + this.energi);
  },

  tidur: function (jam) {
    this.energi += jam * 2;
    console.log(`halo ${this.nama}, selamat tidur. ` + `sisa energi : ` + this.energi);
  },
};

function Player(nama, energi) {
  let player = Object.create(methodMahasiswa);
  player.nama = nama;
  player.energi = energi;
  // dengan menuliskan Object.create di atas, anda tidak perlu menuliskan method di bawah ini.
  // player.makan = methodMahasiswa.makan;
  // player.main = methodMahasiswa.main;
  // player.tidur = methodMahasiswa.tidur;
  return player; // kalau tidak menulis return, function yang mencari return nya tidak akan menemukannya, sehingga function tidak akan berkerja dan muncul kata undefined.
}

let player1 = Player("Ikbar", 15);
let player2 = Player("rabbani", 25);
//
// 3. Construction Function
// keyword new

// function Player(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;

//   this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`halo ${this.nama}, selamat makan` + ` sisa energi : ` + this.energi);
//   };

//   this.main = function (jam) {
//     this.energi -= jam;
//     console.log(`halo ${this.nama}, selamat bermain.` + ` sisa energi : ` + this.energi);
//   };
// }

// let player1 = new Player("ikbar", 3);
// let player2 = new Player("rabbani", 5);
