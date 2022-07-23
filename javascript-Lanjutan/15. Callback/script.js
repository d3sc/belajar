// Callback

// Synchronous callback
// sebuah function yang parameternya function juga
// cara ke 1

// function halo(nama) {
//   alert(`halo ${nama}`);
// }

// function usia(umur) {
//   alert(`usiamu ${umur} tahun`);
// }

// function tampilkanPesan(argument1, argument2) {
//   /* function halo masuk kedalam argument di tampilkanPesan. */
//   const nama = prompt("masukan nama "); /* lalu membuat variable nama, agar bisa dimasukan kedalam argument dari function halo. */
//   const umur = prompt("berapa usia mu?"); /* sama seperti penjelasan diatas tetapi ini umur, artinya saya sudah pernah paham */
//   argument1(nama); /* menjalankan function halo dengan parameter yang di isi dari variable nama yang dibuat diatas. gambarannya seperti halo(nama), tetapi disitu functionya masuk kedalam argument */
//   argument2(umur); /* sama seperti penjelasan diatas tetapi ini umur, artinya saya sudah pernah paham */
// }

// tampilkanPesan(halo, usia); /* tidak menggunakan () di function halo karena pada saat pemanggilan function agar tidak langsung dijalankan. coba ditambahkan () agar lihat perbeadanya*/
// //  memasukan function halo dan usia kedalam parameter function tampilkanpesan

// cara ke 2

// function tampilkanPesan(argument) {
//   const nama = prompt("masukan nama");
//   argument(nama);
// }

// tampilkanPesan((nama) => alert(`halo ${nama}`)); /* memasukan anonim function kedalam function tampilkan pesan */

// Asynchronous callback

const mhs = [
  {
    nama: "kurips",
    nrp: "094020018",
    email: "kurips@gmail.com",
    jurusan: "Teknik Informatika",
    idDosenWali: 1,
  },
  {
    nama: "loupis",
    nrp: "028056029",
    email: "luopis@gmail.com",
    jurusan: "Teknik Informatika",
    idDosenWali: 2,
  },
  {
    nama: "kipli",
    nrp: "014106508",
    email: "kipli@gmail.com",
    jurusan: "Teknik Informatika",
    idDosenWali: 3,
  },
  {
    nama: "esplin",
    nrp: "561011410",
    email: "esplin@gmail.com",
    jurusan: "Teknik Informatika",
    idDosenWali: 4,
  },
];
