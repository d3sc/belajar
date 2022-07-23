// 1. ambil semua element video
const videos = Array.from(document.querySelectorAll("[data-duration]")); /* [] menseleksi atribut di dalam html, dan Array.from untuk mengubah elemen sebelumnya menjadi array */

// 2. pilih yang Javascript Lanjutan
let jsLanjut = videos
  .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN")) /* untuk menyaring li yang isi nya "JAVASCRIPT LANJUTAN" */
  // textContent untuk mencari yang ada di dalam elemen.
  // includes memilih isi elemen tertentu.

  // 3. ambil masing masing durasi video

  .map((item) => item.dataset.duration)
  // .dataset untuk mengseleksi atribut di html yang mempunyai nama data. dan di html, li mempunyai atribut yang bernama data-duration.
  // .duration adalah nama dari atribut di li

  // 4. ubah durasi menjadi float, lalu mengubah menit menjadi detik

  .map((waktu) => {
    // memecah 10:30 -> [10, 30]
    const parts = waktu.split(":").map((part) => parseFloat(part));
    // split() untuk memecah : (titik dua) menjadi array yang terpisah dengan , (koma) [10, 30]. [index 0, index 1]
    // parseFloat untuk mengubah tipe data menjadi pecahan/float, dalam kasus ini tipe dalta dalam parts itu adalah string dan belum diubah.

    return parts[0] * 60 + parts[1]; /* parts[0] dan parts[1] itu adalah nilai index 0, index 1 */
  })

  // 5. jumlahkan semua detik

  .reduce((total, detik) => total + detik, 0);

// 6. Ubah formatnya menjadi jam menit detik

const jam = Math.floor(jsLanjut / 3600); /* Total semua detik (8.292 detik) di bagi 1 jam (3.600 detik) */

jsLanjut = jsLanjut - jam * 3600; /* 8.292 - ( 2 * 3.600 ) = 1092, jadi sisanya adalah 1092 detik. */

const menit = Math.floor(jsLanjut / 60); /* 1092 detik / 1 menit (60 detik) = 18 menit*/

const detik = jsLanjut - menit * 60; /* 1092 - ( 18 * 60 ) = 12 detik  */

// 7. simpan di dom

// memasukan durasi video
const pDurasi = document.querySelector(".total-durasi");
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`;

// memasukan jumlah video
const pJmlVideo = document.querySelector(".jumlah-video");
const JmlVideo = videos.filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN")).length;

pJmlVideo.textContent = JmlVideo + " Video";
