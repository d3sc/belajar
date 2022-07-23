// memasukan function kedalam local modul
function cetakNama(nama) {
  return `selamat datang kembali ${nama}!`;
}

// memasukan variable const kedalam local modul
const umur = 16;

// memasukan object literal kedalam local modul
const siswa = {
  nama: "ikbar",
  umur: 16,
  cetakSiswa() {
    return `halo nama saya ${this.nama} dan umur saya ${this.umur} tahun. salam kenal!`;
  },
};

// class, untuk membuat class peraturannya huruf awal harus besar.
class Orang {
  constructor() {
    console.log("Object orang telah dibuat!");
  }
}

// 1. cara biasa
// module.exports.cetakNama = cetakNama;
// module.exports.umur = umur;
// module.exports.siswa = siswa;
// module.exports.Orang = Orang;

// 2. Memasukan module kedalam object
// module.exports = {
//   cetakNama: cetakNama,
//   umur: umur,
//   siswa: siswa,
//   Orang: Orang,
// };

// 3. jika nama Porperty sama dengan value nya. makan tidak usah  ditulis seperti diatas
module.exports = {
  cetakNama,
  umur,
  siswa,
  Orang,
};
