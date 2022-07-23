// const card = document.querySelector(".card");
// const exit = document.querySelector(".close");

// exit.addEventListener("click", function () {
//   card.style.display = "none";
// });

//  DOM Traversal
// const close = document.querySelectorAll(".close");

// versi ribet dikit

// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener("click", function (e) {
//     // e.target.parentElement.style.display = "none";
//     console.log(e);
//     e.target.parentElement.style.display = "none";
//   });
// }

// versi simple

// close.forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     /* Function(e), dan e itu adalah event. yang artinya jika function dijalankan didalam addEventListener maka jika tombol di klik oleh pengguna maka akan langsung masuk kedalam function secara terpilih. */
//     e.target.parentElement.style.display = "none";
//     e.preventDefault(); /* preventDeafault itu menghilangkan aksi default dari web */
//     e.stopPropagation(); /* Untuk menghentikan addEventListener yang akan jalan di tingkat atasnya, contoh : ('jika itu dihapus maka yang terjadi adalah event close dan cards akan jalan secara bersamaan karena tidak diberikan method itu') */
//   });
// });

// const cards = document.querySelectorAll(".card");

// cards.forEach(function (card) {
//   card.addEventListener("click", function (e) {
//     alert("ok");
//   });
// });

// // perhatikan card pertama
// // method dari Traversal

// const nama = document.querySelector(".nama");

// console.log(nama.nextElementSibling);
// bedanya nextElementSibling dan nextSibling adalah, nextSibiling itu berifat node artinya dia akan membaca apapun termasuk spasi. tetapi kalau nextElementSibling dia hanya akan membaca element html seperti span.

// lebih efektif
// jikalau ingin langsung menambahkan card secara inspect maka akan langsung diseleksi dengan syarat nama classnya sama dengan yang di dalam if.
const container = document.querySelector(".container"); /* menseleksi container dapat mendeteksi semua yang ada di dalam container jika pada saat dipencet */

container.addEventListener("click", function (e) {
  if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
    e.preventDefault();
  }
});
