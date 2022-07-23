// variable yang akan dibahas di sini adalah var, let, const.
// dan sebelum ke variable itu kita harus tau tentang scope

// scope di java script menganut function scope
// scope adalah tanda {}
// maksudnya adalah agar pada saat kita menggunakan nama variable yang sama kita dapat membatasinya dengan menggunakan function scope, apabila variable yang didalam scope sama dengan yang ada di global scope itu tidak akan terjadi bentrok antara nama variabale.
// karena scope global itu tidak akan bisa masuk ke function scope

// contoh var yang diaplikasikan menjadi function scope
// (function () {
//   /* tanda () sebelum function dapat memulai function tanpa harus memanggilnya sesudah functionnya dibuat. dan di akhir terdapat tanda () lagi. */
//   for (var i = 1; i <= 10; i++) {
//     console.log(i);
//   }
// })();

// console.log(i); /* dengan begini tidak bisa mengakses variable yang ada didalam function karena variable scope. */

// itu semua jika menggunakan var.

// kalau sekarang ada variable yang menganut function scope dan tidak perlu membuat function untuk tidak bertabrakan yaitu, let.

// cara ini adalah cara yang benar, karena variable let menganut function scope.
// contoh let yang diaplikasikan menjadi function scope
// for (let i = 1; i <= 10; i++) {
//   console.log(i); /* ini variable yang ada didalam function */
// }
// console.log(i); /* dan sekarang variable ini tidak bisa mengakses variable yang ada di dalam function */

// dan untuk const, const adalah sebuah variable yang tetap sesuai namanya constant dan isi variablenya tidak bisa di ubah dan di bawah ini adalah contohnya. dibawah ini dicontohkan variable a yang di isi 10 dan ingin diubah menjadi 15 tetapi tidak bisa karena variablenya constant.

// const a = 10;
// a = 15; /* dan variable a tidak bisa diubah menjadi 15. */

// dan kita dapat mengubah isi di dalam const tetapi tibak bisa mengganti semuanya.
const i = [1, 2, 3];
i.push(4); /* seperti ini const bisa di ubah dengan cara menambah arraynya. */

console.log(i);
