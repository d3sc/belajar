// saat membuat class tidak perlu menggunakan kurung buka dan tutup, karena pembuatan class itu berbeda dengan function

// Membuat class yang bernama Person
class Person {
  // membuat constructor yang mempunyai argument name
  constructor(name, umur) {
    console.log("membuat person " + name + " dan umurnya adalah " + umur + " tahun");
  }
}

// Membuat variable yang bernama ikbar yang dimasukkan class baru
// dan memasukkan parameter string ikbar
const ikbar = new Person("ikbar", 16);
const rusdi = new Person("rusdi", 15);

// mencetak variable ikbar, yang hasilnya adalah object ayng didalamnya ada proto
console.log(ikbar);
// console.log(rusdi);
