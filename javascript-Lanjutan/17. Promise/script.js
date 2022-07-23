// Jika ingin menjalankan ajax harus menggunakan live server
// $.ajax({
//   url: "http://www.omdbapi.com/?apikey=607a65e6&s=dilan",
//   success: (movies) => console.log(movies),
// });

// 0.1 Fetch
// fetch adalah sebuah syntax yang memiliki cara yang lebih simple dari pada object ajax, dan fetch mengembalikan data promise. dan method json mengembalikan promise.

// fetch("http://www.omdbapi.com/?apikey=607a65e6&s=dilan")
//   .then((response) => response.json())
//   .then((response) => console.log(response));

// 1. Promise
// promise adalah sebuah object yang mepresentasikan keberhasilan / kegagalan sebuah event yang asynchronous dimasa yang akan datang.

// janji(terpenuhi / ingkar)
// dan cara kerja promise lebih mirip seperti janji, dan yang namanya janji itu pasti ada 2 yaitu janji(terpenuhi / ingkar).

// states (fulfilled / rejected / pending)
// dan dalam javascript janji nya itu disebut dengan state, dan kalau terpenuhi disebut dengan fulfilled, lalu jika di ingkari janjinya disebut rejected, setelah itu ada satu keadaan lagi yaitu pending / waktu tunggu.

// callback (resolve / reject / finaly)
// resolve ketika janjinya tepenuhi,  reject ketika janjinya tidak tepenuhi, finaly ketika waktunya selesai.

// aksi (then / catch)
// dan ada aksi ketika janji terpenuhi / tidak tepenuhi. kalau terpenuhi disebut dengan then dan jika tidak terpenuhi disebut catch.

// contoh 1

// let isiJanji = true; /* jika variable isiJanji diubah menjadi false maka akan masuk kedalam else lalu akan masuk kedalam catch */

// const janji1 = new Promise((resolve, reject) => {
//   if (isiJanji === true) {
//     resolve("Janji Ditepati!"); /* resolve ditangkap oleh then */
//   } else {
//     reject("Ingkar Janji!"); /* reject ditangkap oleh catch */
//   }
// });

// janji1.then((result) => console.log(`OK! ${result}`)).catch((result) => console.log(`NOT OK! ${result}`));

// contoh 2

// let isiJanji = false;

// const janji2 = new Promise((resolve, reject) => {
//   if (isiJanji === true) {
//     setTimeout(() => {
//       resolve("Janji Ditepati!");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       reject("Ingkar Janji!");
//     }, 2000);
//   }
// });

// console.log("mulai");
// console.log(
//   janji2
//     .finally(() => console.log("selesai menunggu!"))
//     .then(() => console.log(janji2))
//     .catch(() => console.log(janji2))
// ); /* Ini untuk memunculkan state pending pada console */

// console.log("selesai");

// forEach
// forEach adalah pengulangan khusus array

// Promise.all()
// untuk menjalankan semua promise sekaligus

// contoh promise.all()

const movies = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: "avengers",
        year: "2022",
        pemeran: "ikbar",
      },
    ]);
  }, 1000);
});

const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: "jakarta",
        temp: 26,
        kondisi: "cerah berawan",
      },
    ]);
  });
});

// movies.then((response) => console.log(response));
// cuaca.then((response) => console.log(response));

// jika ingin mengambil semua promise tetapi dimasukan kedalam array
// Promise.all([movies, cuaca]).then((response) => console.log(response));

// Menggunakan spread parameter untuk memecah arraynya, yang tadinya berada di dalam array.
Promise.all([movies, cuaca]).then((response) => {
  const [movies, cuaca] = response;
  console.log(movies);
  console.log(cuaca);
});
