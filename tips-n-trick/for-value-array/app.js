// Membuat pengulangan yang nilainya dimasukkan kedalam array.

// Membuat var yang di isi array kosong, agar digunakan untuk tempat menyimpan.
let array = [];

// Membuat pengulangan
for (let i = 1; i <= 10; i++) {
 // Membuat value yang dimasukkan kedalam var halo;
 let halo = "halo " + i;
 //  Memasukkan isi yang ada di dalam var halo kedalam array dengan menggunakan method push.
 array.push(halo);
}

// Menampilkan hasil
console.log(array);

//* Sebuah contoh sederhana
// Membuat angka genap dari 1 - 100, yang dimasukkan kedalam array.

let arr = [];

for (let i = 1; i <= 100; i++) {
 if (i % 2 == 0) {
  arr.push(i);
 }
}

console.log(arr);
