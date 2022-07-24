// Finally
//! finally adalah hasil akhir yang menandakan bahwa kode telah selesai dijalankan.
//! jikalau terjadi suatu error ataupun tidak error, maka kode yang ada di dalam block finally akan tetap dijalankan.
//* finally tidak memiliki parameter

class MathUtil {
  static sum(...numbers) {
    if (numbers.length <= 0) throw new Error("value salah!");
    let total = 0;
    for (let number of numbers) {
      total += number;
    }
    console.log(total);
  }
}

try {
  // Kode error
  MathUtil.sum(1);

  MathUtil.sum(1, 2, 3, 4, 5);
} catch (error) {
  console.log(error.message);
} finally {
  //* kode yang ada didalam block finally akan tetap dijalankan jika ada error ataupun tidak ada error.
  console.log("kode telah selesai dijalankan");
}

console.log("kode program tidak akan berhenti");

// Bonus
// try finally
//! Jika ingin menggunakan finally tanpa harus menggunakan catch

class Counter {
  // Menggunakan private class field
  #value = 1;

  next() {
    try {
      // begini cara memanggil private class field, this.#value
      return this.#value;
    } finally {
      this.#value++;
    }
  }
}

const counter1 = new Counter();

console.log(counter1.next());
console.log(counter1.next());
