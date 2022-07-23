// Iterable Object adalah sebuah object yang dapat melakukan looping

// I. for..of

// A. Array

// const mhs = ["ikbar", "husni", "ruspi"];

// 1. Menggunakan for Looping

// for (let i = 0; i < mhs.length; i++) {
//   console.log(mhs[i]);
// }

// 2. Menggunakan foreach Looping
// for each berlaku hanya untuk array, dan tidak bisa untuk string

// mhs.forEach((m) => console.log(m));

// 3. Menggunakan for..of Looping

// for (const m of mhs) {
//   console.log(m);
// }

// B. String
// const nama = "ikbar";

// 1. Menggunakan for..of Looping
// for (const n of nama) {
//   console.log(n);
// }

// const mhs = ["ikbar", "husni", "ruspi"];
// 2. Menggunakan foreach Looping
// mhs.forEach((m, i) => console.log(`${m} adalah mahasiswa ke-${i + 1}`)); /* parameter baru dalam foreach i (index). urutan foreach adalah [nama variable, index] */

// 3. Menggunakan for..of Looping
// for (const [i, m] of mhs.entries()) { /* entries adalah sebuah method untuk memunculkan index dan array */
//   /* Urutan for..of adalah [index, nama variable] */
//   console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// }

// C. NodeList
// const liNama = document.querySelectorAll(".nama"); /* ini akan memanggil node list karena nodelist adalah ketika melakukan sesuatu terhadap dom (document object model) */

// 1. Menggunakan foreach Looping
// liNama.forEach((n) => console.log(n.textContent));

// 2. Menggunakan for..of Looping
// for (n of liNama) {
//   console.log(n.innerHTML);
// }

// D. Arguments

// function jumlahAngka() {
//   let jumlah = 0;
//   for (a of arguments) {
//     jumlah += a;
//   }
//   return jumlah;
// }

// console.log(jumlahAngka(1, 2, 3, 4, 5));

// II. for..in
// Membuat looping hanya pada jenis Enumerable / yang bersifat object saja

// const mhs = {
//   nama: "ikbar",
//   umur: 16,
//   email: "ikbar@gmail.com",
// };

// for (m in mhs) {
//   console.log(mhs[m]); /* Mengambil index dari mhs ke m */
// }

console.log(`suku(suku pertama, mau berapa suku)`);
function suku(a, b) {
  for (let i = 0; i <= b; i++) {
    a += i;
    let hasil = `a = ${a}
i = ${i},
Suku ke-${i + 2} =( ( a + i + i )+ 2 )
`;
    let hasilSuku = a + i + i + 2;
    console.log(`${hasil} Suku ke-${i + 2} hasilnya adalah ${hasilSuku}`);
  }
}
