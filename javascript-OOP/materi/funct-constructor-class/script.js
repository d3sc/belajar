//! Object Constructor
// function Siswa(nama, kelas) {
//   this.nama = nama;
//   this.kelas = kelas;
//   this.sayHello = function () {
//     console.log(`halo, nama saya ${this.nama}, kelas ${this.kelas}`);
//   };
// }

// const siswa1 = new Siswa("ikbar", "X rpl");
// siswa1.sayHello();

// const siswa2 = new Siswa("rusdi", "X mm");
// siswa2.sayHello();

//! CLass
class Siswa {
  constructor(nama, kelas) {
    this.nama = nama;
    this.kelas = kelas;
  }

  sayHello() {
    console.log(`halo, nama saya ${this.nama}, kelas ${this.kelas}`);
  }
}

const siswa1 = new Siswa("ikbar", "X rpl");
siswa1.sayHello();

const siswa2 = new Siswa("rusdi", "X mm");
siswa2.sayHello();
