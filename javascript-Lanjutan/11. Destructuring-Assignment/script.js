// Destructuring variable / Assignment

// 1. Destructuring array
// const coba = ["halo", "nama", "saya", "ikbar"];

// const [salam, b, c, nama] = coba; /* masing masing nilai pada array di buat variable, dari index 0, 1, 2 dan diganti menjadi variable a, b, c yang ada pada array coba*/

// console.log(salam, b , c, nama);

// 2. Skip items
// melewati item yang tidak di inginkan
// const [salam, , , nama] = coba;

// console.log(salam, nama);

// 3. swap items
// menukar isi dari variable
// let a = 1,
//   b = 2;

// [a, b] = [b, a];
// console.log(a, b);

// 4. Return value pada function
// memecah nilai yang ingin diseleksi

// function coba() {
//   return [1, 2]; /* disini function nya sudah berubah menjadi array, karena di return array. */
// }

// const [a, b] = coba();

// console.log(a, b);

// 5. Rest Parameter
// untuk memasukan sisa dari nilai yang banyak kedalam 1 variable.

// const [a, ...values] = [1, 2, 3, 4, 5, 6];

// console.log(values);

// 6.1 Destructuring Object
// dan bukan hanya array yang bisa, tetapi object juga bisa.
// const mhs = {
//   nama: "ikbar",
//   kelas: 9,
// };

// const { nama, kelas } = mhs; /* Nama variable harus sama dengan nama method pada object. */

// console.log(nama);

//  6.2 Assignment tanpa deklarasi object
// syaratnya harus diberikan kurung di awal dan diakhir object
// ({ nama, kelas } = { nama: "ikbar", kelas: 9 });

// console.log(nama);

// 7. Assign ke variable baru
// const mhs = {
//   nama: "ikbar",
//   kelas: 9,
// };

// const { nama: n, kelas: k } = mhs; /* Menyingkat method dengan menambahkan variable baru */

// console.log(n);

//  8. Memberikan defoult Value
// const mhs = {
//   nama: "ikbar",
//   kelas: 9,
//   email: "ikbar686@gmail.com" /* Yang diutamakan adalah yang ini terlebih dahulu, karena dia akan mengecek ke object terlebih dahulu. */,
// };

// const { nama, kelas, email = "ikbar@gmail.com" /* Setelah itu baru yang ini */ } = mhs;

// console.log(email);

// 9. Memberi Default Value + Assign ke variable baru

// const mhs = {
//   nama: "ikbar",
//   kelas: 9,
//   email: "ikbar686@gmail.com",
// };

// const { nama: n, kelas: k, email: e /* Harus diberi sebelum tanda sama dengan / seperti tanda disamping */ = "ikbar@gmail.com" } = mhs;

// console.log(e);

//  10. Rest Parameter
// const mhs = {
//   nama: "ikbar",
//   kelas: 9,
//   email: "ikbar686@gmail.com",
// };

// const { nama: n, ...values } = mhs;

// console.log(values);

// 11. Mengambil field pada object, setelah dikirim sebagai parameter untuk function

const mhs = {
  id: 123,
  nama: "ikbar",
  kelas: 9,
  email: "ikbar686@gmail.com",
};

function getIdMhs({ id }) {
  /* parameter, memilih method id yang ada didalam object. dengan SYARAT harus menggunakan {} pada parameter. */
  return id; /* jika sudah ketemu, return nilai yang ada pada method id */
}

console.log(getIdMhs(mhs)); /* Memilih object */
