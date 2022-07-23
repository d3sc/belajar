// Timing-Events

// setTimeout(), seharusnya penulisannya window.setTimeout(). tetapi karena window itu global jadi tidak usah ditulis.
// setInterval(), seharusnya penulisannya window.setTimeout(). tetapi karena window itu global jadi tidak usah ditulis.

// kedua function itu merupakan bagian dari window, dari mereka merupakan event dari window. sama seperti alert,prompt,confirm, dll.

// 1. setTimeout
// setTimeout akan menjalankan program kita setelah kita menunggu beberapa waktu, tergantung dari waktu yang kita aturkan di parameternya.
// contoh :

// setTimeout(tampilkanPesan, 1000); /* waktu yang dimasukan dalam parameter event nya adalah milisecond/mili detik, jadi kalau 1000 mili detik = 1 detik */
// // dan function yang didalam event jangan langsung dijalankan, seperti tampilkanPesan(). tetapi yang benar adalah seperti di atas.

// function tampilkanPesan() {
//   console.log("Hello World");
// }

// dan event nya bisa dijalankan menggunakan anonymous function, seperti contoh dibawah ini.
// setTimeout(function () {
//   console.log("bakso");
// }, 3000);

// dan ada cara untuk menghentikan aksi timing nya agar tidak muncul, yaitu dengan cara.
// const tes = setTimeout(function () {
//   console.log("bakso");
// }, 3000);

// const button = document.getElementById("tombol");

// button.addEventListener("click", function () {
//   clearTimeout(tes); /* berfungsi untuk menghentikan aksi timing */
//   console.log("selesai");
// });
//  pada saat tombol ditekan aksi timing akan berhenti.

// 2. setInteval
// setInterval melakukan sesuatu secara berulang ulang dengan interval waktu tertentu. dengan kata lain, beberapa detik aksi akan dijalankan terus menerus.
// contoh :
// const tes1 = setInterval(function () {
//   console.log("bakso");
// }, 2000);

// button.addEventListener("click", function () {
//   clearInterval(tes1);
//   console.log("selesai");
// });

// Program hitung mundur

const tanggalTujuan = new Date("april 16, 2022 4:28:00").getTime();

const hitungMundur = setInterval(function () {
  const sekarang = new Date().getTime();
  const selisih = tanggalTujuan - sekarang;

  const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
  const jam = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
  const detik = Math.floor((selisih % (1000 * 60)) / 1000);

  const h1 = document.getElementById("teks");

  h1.innerHTML = `waktu anda tinggal = ${hari} hari ${jam} jam ${menit} menit ${detik} detik`;
  if (selisih < 0) {
    clearInterval(hitungMundur);
    h1.innerHTML = "Waktu anda habis!";
  }
}, 1000);
