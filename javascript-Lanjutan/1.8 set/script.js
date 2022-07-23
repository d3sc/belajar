// Set

// Secara otomatis Set akan membuang angka yang sama
const numberSet = new Set([1, 4, 6, 4, 1]);

// Untuk menambahkan data ke dalam Set kita bisa memanfaatkan method add().
numberSet.add(5);
numberSet.add(10);

// Untuk menghapus data yang ada di dalam set kita bisa menggunakan method delete().
numberSet.delete(1);
console.log(numberSet);
