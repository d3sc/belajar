// Filter, Map, Reduce
// fungsi tersebut hanya berlaku pada array
const angka = [-2, 5, -5, 2, 7, 18, -9, 7, 3, 1];

// Mencari angka >= 3

// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }

// console.log(newAngka);

// 1. Filter
// kegunaannya adalah untuk menyaring nilai yang di inginkan, seperti contoh dibawah ini, operasi dibawah ini bertujuan untuk menyaring angka yang berada diatas angka 3.
// const newAngka = angka.filter((a) => a >= 3); /* menggunakan arrow function jadi lebih praktis */
// console.log(newAngka);

// 2. map
// map itu tidak merubah isi dari array angka nya, jadi angka nya masih ada
// petakan semua elemen pada array dengan sebuah fungsi yang baru, dan fungsinya bisa macam macam bukan hanya * 2 saja.
// kalikan semua angka dengan 2

// const newAngka = angka.map((a) => a * 2);
// console.log(angka)
// console.log(newAngka);

// 3. Reduce
// untuk melakukan sesautu terhadap seluruh elemen pada array. dan reduce memerlukan 2 argument/parameter.

// Jumlahkan seluruh elemen pada array
// yang terjadi adalah ( dan terdapat nilai awal di angka nol, (0) + -2 + 5 + -5 + 2 + 7 + 18 + -9 + 7 + 3 + 1) /* nilai awal ini dapat di ubah */
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, /* dan nilai awal berada di sini, angka sudah 0 diganti yang awalnya angka 0 menjadi 5. */ 5);
// console.log(newAngka);

// 4. method chaining
// kita dapat menggabungkan fungsi fungsi pada higher order function dalam 1 kali exekusi, dan tidak perlu disimpan ke variable terlebih dahulu.

// angka > 5
// kalikan 3
// jumlahkan

// Ini ditulis manual
// const cariAngka = angka.filter((a) => a > 5);
// const kalikanAngka = cariAngka.map((a) => a * 3);
// const jumlahkanAngka = kalikanAngka.reduce((acc, cur) => acc + cur, 0);

// ini menggunakan method chaining dengan cara tidak menggunakan ; di akhir method tetapi menggunakan . (titik), dan dapat diisi secara berulang ulang. misalnya (menambahkan method map lagi)
const totalAngka = angka
  .filter((a) => a > 5) /* 7, 18, 7 */
  .map((a) => a * 3) /* 21, 54, 21 */
  .map((a) => a / 2) /* 10.5, 27, 10.5 */
  .reduce((acc, cur) => acc + cur, 0); /* 10.5 + 27 + 10.5 = 48*/

console.log(totalAngka);
