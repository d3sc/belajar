// 2 cara menampilkan value dari object

const artistsAndSongs = {
  // Mengisi valuenya dengan array.
  Keyakizaka46: ["Silent Majority"],
  Blackpink: ["How You Like That", "Ice Cream"],
  JKT48: ["Rapsodi", "Heavy Rotation"],
  Twice: ["What is Love?"],
  "Dewa 19": ["Semua tak sama"],
};

// Menambahkan Property dan value kedalam object literals artistsAndSongs
artistsAndSongs["Babymetal"] = ["Gimme chocolate"];

// ada 2 cara menampilkan value dari property object

// 1. memanggil dengan cara Bracket
// keuntungan bisa menggunakan spasi
// Menampilkan isi / value dari property Dewa 19
console.log(artistsAndSongs["Dewa 19"]);

// 2. memanggil dengan titik
// menampilkan isi dari JKT48
console.log(artistsAndSongs.JKT48);

delete artistsAndSongs["Keyakizaka46"];
delete artistsAndSongs["JKT48"];

// console.log(artistsAndSongs);
