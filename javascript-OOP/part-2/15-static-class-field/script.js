// Static Class Field
//! jika kita menggunakan Static class field secara otomatis field tersebut akan menjadi milik class.
// Bukan lagi milik instance object.
// dan cara pemanggilan nya, dengan cara memanggil class nya
//! dan juga bersifat global, maksudnya jika kita mengubah property di luar classnya maka dia akan berubah valuenya.
// bersifat global jika kita merubah dimanapun dan mengakses dimanapun maka dia otomatis akan berubah juga.

class Configuration {
  static nama = "ikbar";
  static kelas = "11";
}

// Bersifat global, mengubah value dari luar class
Configuration.nama = "tipang";

// Cara pemanggilannya melalui class nya, karena sudah milik class
console.log(Configuration.nama);

// Jika di cek didalam instance object, dia tidak ada.
// karena field nama dan kelas bersifat static, yang artinya mereka sudah menjadi milik class
console.log(Configuration);
