// Parameter dan Argument dalam function
// Contoh calculator sederhana

var ulang = true;

while (ulang) {
  function jumlah(a, b) {
    return a + b;
  }

  var a = parseInt(prompt("Masukan nilai 1 : "));
  var b = parseInt(prompt("Masukan nilai 2 : "));

  var hasil = jumlah(a * 2, b * 2); /* dapat diisi menjadi variable dan dapat dikembalikan menjadi angka kembali */
  alert(hasil);

  ulang = confirm("ulang lagi?");
}
