const container = document.querySelector(".container");

// Bagian dari arg pertama adalah nama var dan kedua adalah valuenya.
// jik Menggungakan varibel wajib menggunakan ( -- ) dia awal namanya.
document.body.style.setProperty("--black", "red");

// document.body disitu sebagai tujuan ( sebelum .style.setProperty() ).

// document.body untuk menaruh property di dalam body
// sebenarnya tidak harus document.body, bisa bebas juga sesuai element yang di pilih.
// contohnya coba ganti saja jadi container.style.setProperty("--black", "red");
// artinya dia akan memasang property di container.
// dan walaupun tujuan nya berbeda, hasilnya akan sama jika dipakai.
