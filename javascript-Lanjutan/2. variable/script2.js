// Contoh kedua

// Global Scope
let i = 20;

//! Selama dia berbeda scope nama variable yang sama tidak akan berpengaruh
// Jika menggunakan variable let maka dia akan memanggil variable i yang berisi angka 20.
// tetapi jika menggunakan variable var dia akan memanggil local scope yang ada di for.
for (let i = 1; i <= 10; i++) {
  // Local Scope
  console.log(`local scope ${i}`);
}

console.log(`Global ${i}`);
