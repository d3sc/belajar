// 2.1 EXECUTION CONTEXT, HOISTING, & SCOPE

// console.log(nama);
// var nama = "ikbar";

// creation phase pada Global Context
// yang terjadi pada phase Create ini javascriptnya akan mengecek apakah ada variable / function kalau ada dia akan membuat nama variable akan di isi dengan undefined.
// nama var = undefined
// nama function = fn()     / fn() adalah nama function itu sendiri, dan tidak dijalankan.
// konsep di atas disebut dengna konsep hoisting, artinya meskipun variable dan function ditulis dibawah, mereka akan dinaikan ke atas.
// javascript mendefinisikan object
// window = global object
// this = window

// execution phase

// var nama = "ikbar";
// var umur = 16;

// function sayHello() {
//   console.log(`halo nama saya ${nama}, dan umur saya ${umur}.`);
// }
// console.log(sayHello());

// function akan membuat Local Execution Context
// yang didalamnya terdapat creation dan execution phase
// window
// arguments yang terdapat pada parameter function.
// dan didalam function juga teradpat hoisting.

// contoh pertama

var nama = "ikbar";
var username = "@ikrabni_01";

function cetakUrl() {
  console.log(arguments); /* disini data descloups01 tersimpan dan tidak hilang. (arguments bersifat array)*/
  var instagramUrl = "https://instagram.com/";
  return instagramUrl + username; /* variable username akan mencari variable yang terdekat, yang pertama local scope, lalu parameter pada function, lalu global scope. */
}

console.log(cetakUrl("descloups01"));

// contoh ke dua
// function a() {
//   console.log("ini adalah function a");
//   function b() {
//     console.log("ini adalah function b");
//     function c() {
//       console.log("ini adalah functuon c");
//     } /* lalu setelah function c dijalankan, dia akan keluar dari function */
//     c(); /* setelah eksekusi di function b sudah dijalankan, dia menjalankan function c */
//   }
//   b(); /* setelah eksekusi di function a sudah dijalankan, dia menjalankan function b */
// }
// a(); /* dari sini dia menjalankan function a */

// contoh ke 3
function satu() {
  var nama = "ikbar";
  console.log(nama);
}
function dua() {
  console.log(nama);
}
console.log(nama);
var nama = "tipang";
satu();
dua("tupiels");
console.log(nama);
