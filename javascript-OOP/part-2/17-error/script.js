// Error
// Error adalah sebuah class
// dan class Error adalah superClass untuk semua jenis error yang ada di javascript.

// Throw error
// pada saat kita ingin men-trigger error terjadi, kita perlu melempar error.
// dengan menggunakan throw error.
// dan jika error terjadi, otomatis kode program kita akan terhenti. dan kita bisa melihat detailnya di console browser.

class MathUtil {
  static sum(...numbers) {
    // menggunakan pengkondisian dan jika bernilai true maka akan melempar error.
    if (numbers.length <= 0) throw new Error("value salah!");
    let total = 0;
    for (let number of numbers) {
      total += number;
    }
    console.log(total);
  }
}

// Memanggil static method dengan class
MathUtil.sum(0);
