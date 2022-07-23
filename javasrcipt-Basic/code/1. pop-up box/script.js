// var nama = prompt("Masukan Nama"); /* variable nama */

// alert(nama);

// var tes = confirm("Kamu yakin?"); /* pengkondisian / percabangan sederhana */

// if (tes === true) {  // percabangan if / else
//   alert("user menekan tombol OK!");
// } else {
//   alert("user menekan tombol cancle");
// }

alert("selamat datang!");
alert("uh...");
alert("nama mu siapa ya? coba kenalan...");
var lagi = true;

while (lagi === true) {
  // Pengulangan While
  var nama = prompt("Masukan Nama");
  alert("Name: " + nama);

  lagi = confirm("Ganti nama?");
}

alert("terima kasih " + nama + "-kun!");
