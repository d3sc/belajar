// title Arrow fucntion
// arrow function tidak mempunyai konsep this, karena dia ngak mempunyai konsep this maka this akan mencari ke laxical scope nya.

//
// 1. function expression
// const tampilkanNama = function (nama) {
//   console.log(`halo ,${nama}`);
// };

// tampilkanNama("ikbar");

//
// 2. implisit return
// const tampilkanNama = (nama) =>
//   `halo ,${nama}`; /* jika hanya ada 1 parameter tidak usah menggunakan kurung, dan jika ingin return tidak usah ditulis langsung jalankan saja tanpa memanggil return. karena return sudah otomatis di isi */

// console.log(tampilkanNama("ikbar"));

//
// 3. jika ingin menuliskan lebih dari 1 parameter, dengan cara berikut ini

// const tampilkanNama = (nama, waktu) => {
//   console.log(`selamat ${waktu} ,${nama}`);
// };

// console.log(tampilkanNama("ikbar", 'waktu'));

//
// 4. Jika ingin tanpa parameter

// const tampilkanNama = () => 'Hello World';

// tampilkanNama()

// 5. contoh sederhana cara menggunakan arrow function
// let mahasiswa = ["ikbar", "uspli", "kolpensoten"];

// let jumlahHuruf = mahasiswa.map(nama => nama.length);

// console.log(jumlahHuruf);

// 6. menggunakan object pada function
// let mahasiswa = ["ikbar", "uspli", "kolpensoten"];

// let jumlahHuruf = mahasiswa.map((nama) => ({ namaOrang: nama, jmlHuruf: nama.length })); /* Jika ingin menggunakan object pada function arrow / biasa adalah dengan menggunakan, (parameter) => ({ isi object })  */

// console.table(jumlahHuruf);

// 7. contoh sederhana function expresion dan function arrow
// const Pelajar = function () {
//   /* tidak bisa dipasang arrow function karena nanti dibacanya bukan constructor */
//   this.nama = "ikbar";
//   this.umur = 16;
//   this.sayHello = () => console.log(`Hello, nama saya ${this.nama}, umur saya ${this.umur}`);
// };

// const ikbar = new Pelajar();

// object literal
// const mhs1 = {
//   nama: "ikbar",
//   umur: 16,
//   sayHello: function () {
//     /* Jika menggunakan arrow function dia akan mencari this sampai ke window. tapi kalau menggunakan function biasa dia akan mencari this pada object. */
//     console.log(`Hello, nama saya ${this.nama}, umur saya ${this.umur}`);
//   },
// };

// const Pelajar = function () {
//   this.nama = "ikbar";
//   this.umur = 16;
//   this.sayHello = () => console.log(`Hello, nama saya ${this.nama}, umur saya ${this.umur}`);

//   // arrow function tidak mempunyai konsep this, karena dia ngak mempunyai konsep this maka this akan mencari ke laxical scope nya.
//   setInterval(() => {
//     //   tidak bisa jika menggunakan function biasa
//     console.log(this);
//     /* dan jika menggunakan arrow function dia akan mencari this ke lexical scope yaitu objectnya */
//     /* jika menggunakan function biasa dia akan mencari this ke window scope. */
//   }, 1000);
// };

// const ikbar = new Pelajar();
