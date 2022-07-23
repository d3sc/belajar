// Desctructuring Function

//  1. membuat contoh Desctructuring Function return value sederhana

function kalkulasi(a, b) {
  return [a + b, a - b, a * b, a / b]; /* Retrun array */
}

// Ini jika tidak menggunakan Destructuring
// const jumlah = kalkulasi(5, 6)[0];
// const kali = kalkulasi(5, 6)[1];

// const [jumlah, kurang, kali, bagi] = kalkulasi(5, 6); /* Penempatan variable harus akurat / teratur, (sama dengan penempatan operasi pada return array) */
// console.log(kali);

// 2. Agar tidak memasukan variable yang akurat sesuai dengan penempatannya adalah dengan cara memakai object

// function kalkulasi(a, b) {
//   return {
//     /* tidak harus sama dengan susunan methodnya */
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b,
//   };
// }

// const { kurang, kali, bagi, tambah } = kalkulasi(10, 5); /* dapat memasang variable secara bebas */

// console.log(kali);

// 3. Desctructuring Function arguments

// 3.1 Contoh tidak menggunakan Destructuring Function arguments
// const mhs1 = {
//   nama: "ikbar",
//   umur: 16,
//   email: "ikbar686@gmail.com",
// };

// const mhs2 = {
//   nama: "rokbi",
//   umur: 15,
//   email: "rokbi686@gmail.com",
// };

// function cetakMhs(mhs) {
//   return `Halo nama saya ${mhs.nama}, umur saya ${mhs.umur} tahun. `;
// }
// console.log(cetakMhs(mhs1));
// console.log(cetakMhs(mhs2));

// 3.2 Contoh menggunakan Destructuring Function arguments

/* Object mhs1. nama, umur dan email adalah method dari object */
// const mhs1 = {
//   nama: "ikbar",
//   umur: 16,
//   email: "ikbar686@gmail.com",
//   nilai: {
//     tugas: 80,
//     uts: 85,
//     uas: 83,
//   },
//   hasil: {
//     lulus: "lulus",
//     gagal: "gagal",
//   },
// };

// function cetakMhs({ nama, umur, nilai: { uas, uts, tugas }, hasil: { lulus, gagal } }) {
//   /* Destruction bersarang, didalam nya terdapat Desctruction lagi */
//   /* pada parameter, dicek didalam object. apakah terdapat method yang terdapat pada parameter ({nama, umur}). kalau ada tampilkan */
//   return `Halo nama saya ${nama}, umur saya ${umur} tahun. dan nilai uas ${uas}, dan dinyatakan ${lulus} `;
// }

// console.log(cetakMhs(mhs1)); /* memilih object mhs1 */
