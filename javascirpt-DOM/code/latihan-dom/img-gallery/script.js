const container = document.querySelector(".container");
const jumbo = document.querySelector(".jumbo");
const thumbs = document.querySelectorAll(".thumb");
console.log(thumbs);

// menambahkan eventListener pada container
container.addEventListener("click", function (e) {
  // menjalankan gambar yang memiliki class thumb, pada saat gambar di-klik (yang hanya memiliki class thumb).
  if (e.target.className == "thumb") {
    // Menganti src gambar pada jumbo menjadi src gambar yang di-klik di dalam class thumb.
    jumbo.src = e.target.src;
    // menambahkan class fade di dalam  jumbo.
    jumbo.classList.add("fade");
    // menambahkan timeout pada jumbo selama 5 milisecond
    setTimeout(function () {
      // menghapus class fade pada jumbo
      jumbo.classList.remove("fade");
    }, 500); /* ini atur waktunya (500 = 5 milisecond / 0.5s) */

    // membuat pengulangan pada array thumbs
    thumbs.forEach(function (thumb) {
      //   if (thumb.classList.contains("active")) {
      //     thumb.classList.remove("active");
      //   }
      //   menambahkan class thumb ke semua gambar
      thumb.className = "thumb";
    });
    // menambahkan class active kepada gambar yang di-klik
    e.target.classList.add("active");
  }
});
