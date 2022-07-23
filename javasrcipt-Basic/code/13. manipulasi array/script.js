// Manipulasi array

// 1. menambahkan array
// var arr = [];
// arr[0] = 'ikbar';
// arr[1] = 'rabbani';
// arr[2] = 'purwanto';
// jika ingin menambahkan array harus sesuai dengan urutannya.

// 2. Mengurangi array
// var arr = ["ikbar", "rabbani", "purwanto"];
// arr[2] = undefined;
// console.log(arr);

// 3. Menampilkan isi array
// var arr = ["ikbar", "rabbani", "purwanto"];
// // .length berfungsi untuk mengetahui jumlah dari array
// for (var a = 0; a < arr.length; a++) {
//   console.log("Siswa ke-" + (a + 1) + " : " + arr[a]);
// }

// Method pada array

// 1. join
// untuk mengubah objek yang ada pada array menjadi string.

// console.log(arr.join(" - "));

// 2. push & pop
// push untuk menambahkan/memasukan elemen baru array di akhir array nya.
// pop untuk menghapus elemen array di akhir array nya.

// arr.push("sangat", "keren"); /* dapat memeasukan 2 elemen sekaligus. */

// arr.pop();

// 3. unshift & shift
// unshift untuk menambahkan/memasukan elemen baru array di awal array nya.
// shift untuk menghapus elemen array di awal array nya.

// arr.unshift("kamu", "adalah");

// arr.shift();

// console.log(arr.join(" - "));

// 4. Splice
// untuk mengatur elemen pada array bisa dihapus dan ditambahkan.
// rumusnya adalah = splice(indexAwal, bagianDihapus, elemenBaru1, elemenBaru2, ...)

var arr = ["ikbar", "rabbani", "purwanto", "keren"];

arr.splice(1, 2, "keren");

console.log(arr);
//  1 = mau dimulai dari index keberapa, karena disitu 1 jadinya "rabbani".
//  2 = mau dihapus berapa index kedepannya, karena disitu 2 berarti "rabbani", "purwanto" sudah dihapus. ini dapat di tulis menjadi 0, artinya tidak ada elemen yang dihapus.
//  keren = dan yang dihapus tadi digantikan elemen baru "keren".

// console.log(arr.join(" - "));

// 5. slice
// untuk mengambil/mengiris/mengcopy elemen pada array
// rumusnya adalah = slice(awal,akhir)

// var arr = ["ikbar", "rabbani", "purwanto", "keren"];

// var arr2 = arr.slice(1, 3);
//  1 = mulai dari index keberapa, karena itu 1 jadi "rabbani"
//  3 = diakhiri sampai index keberapa, karena itu 3 jadi berhenti di "keren" dan "keren" tidak di cetak karena itu patokannya.

// console.log(arr2.join());

// 6. forEach
// untuk melakukan looping pada array dan lebih keren dari for biasa.

// var angka = [1, 2, 3, 4, 5, 6, 7, 8];

// versi susah
// for (var e = 0; e < angka.length; e++) {
//   console.log(angka[e]);
// }

// versi simple
// angka.forEach(function (i) {
//   console.log(i);
// });

// contoh lain
// var nama = ["ikbar", "keren", "sekali"];

// nama.forEach(function(array, index)) /* ini rumus */
// nama.forEach(function (e, i) {
//   console.log("no siswa ke-" + 0 + (i + 1) + " yaitu " + e);
// });

// 7. map
// map mengembalikan array sementara forEach tidak

// var angka = [1, 2, 3, 4, 5, 6, 7, 8];

// var angka2 = angka.map(function (e) {
//   return e * 2;
// });

// console.log(angka2.join(" - "));

// sort
// untuk mengurutkan array

// var angka = [1, 2, 10, 20, 6, 8, 5, 3, 7, 4];
// angka.sort(function (a, b) {
// tambahkan function jika ingin mengurutkan angka 10 dan 20, dan coba saja hilangkan functionya jika ingin melihat 10 dan 20 tidak berurut
// return a - b;
// });
// console.log(angka.join(" - "));

// 8. filter & find
// find mengembalikan 1 nilai
// filter mengembalikan banyak nilai

// var angka = [1, 2, 10, 20, 6, 8, 5, 3, 7, 4];
// var angkaYgDicari = angka.find(function (x) {
//   return x > 5;
// });

// console.log(angkaYgDicari); /* find tidak bisa diberi join karena join itu adalah penggabungan antara array, jadi kalau hanya 1 saja itu bukan penggabungan jadinya kalau menggunakan find tidak bisa menggunkan join. */
