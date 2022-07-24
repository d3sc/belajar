// Error Handling
//* jika sebelumnya kita hanya melempar error, maka kali ini kita harus menggunakan error handling. agar semakin lengkap
//* dengan menggunakan try, catch
//! jika di block try terdapat error maka kode akan berhenti dan dia akan masuk kedalam block catch.
// catch memiliki parameter dan try tidak.

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

//! kode program terhenti hanya di dalam block try saja jikalau terjadi error, dan dia akan masuk ke dalam blco catch.
//! setelah itu dia akan menjalankan kode diluar block try dan catch
try {
  // Kode error
  MathUtil.sum();

  //* kode dibawah ini tidak akan dijalankan ketika ada error di atas
  MathUtil.sum(1, 2, 3, 4, 5);
} catch (error) {
  //! argument error yang ada di catch adalah error dari block try, singkatnya jika di dalam block try terdapat error maka dia akan masuk kedalam argument catch.

  //* error.message adalah property bawaan dari class error
  console.log(error.message);
}

// menjalankan kode diluar try dan catch
console.log("kode program tidak akan berhenti");
