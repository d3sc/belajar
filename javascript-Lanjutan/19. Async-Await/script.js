// Async Await

// 1. mencoba promise kedalam variable
// const coba = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("selesai");
//   }, 2000);
// });

// coba.then((result) => console.log(result));

// 2. Mencoba promise menggunakan function
function cobaPromise() {
  return new Promise((resolve, reject) => {
    const waktu = 6000; /* ubah ini untuk mengganti waktu nya */
    if (waktu < 5000) {
      /* Jika var waktu kurang dari 5 detik maka akan masuk ke resolve */
      setTimeout(() => {
        resolve("selesai");
      }, waktu);
    } else {
      /* Jika var waktu lebih dari 5 detik maka akan masuk ke dalam reject */
      reject("kelamaan");
    }
  });
}

// const coba = cobaPromise();
// coba
// .then((result) => console.log(result))
// .catch((result) => console.log(result));

// menggunakan try dan catch hanya pada async dan await saja.
async function cobaAsync() {
  // try untuk menangkap resolve dari promise
  try {
    const coba = await cobaPromise();
    return console.log(coba);
  } catch (err) {
    /* Catch untuk menangkap reject */
    console.error(err); /* console.error untuk memunculkan pesan pada error di console */
  }
}

cobaAsync(); /* Menjalankan function cobaAsync() */
