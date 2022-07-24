// Static Method
//! Sama seperti static class field. jika kita memasang static pada method didalam class, maka dia akan menjadi milik class.
//* dan diakses nya juga harus menggunakan class
//! dan juga bersifat global

class MathUtil {
  static sum(...numbers) {
    let total = 0;
    for (let number of numbers) {
      total += number;
    }
    console.log(total);
  }
}

// Memanggil static method dengan class
MathUtil.sum(1, 2, 3, 4, 5);
