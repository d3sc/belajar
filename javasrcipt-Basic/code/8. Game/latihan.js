// Trick Ulang
var ulang = true;

while (ulang) {
  alert("tebak angka 0-10");

  var hasil = Math.round(Math.random() * 10);
  console.log(hasil);

  // Pengulangan kesempatan
  for (var kesempatan = 3; kesempatan > 0; kesempatan--) {
    var player = prompt("Masukan angka");

    // Pengurangan kesempatan
    kurangiKesempatan = kesempatan - 1;
    // Pengkondisian di dalan Pengkondisian
    // Aturan game
    if (player == hasil) {
      alert("Angka benar, yaitu " + hasil);
      kesempatan = 0;
    } else if (player <= hasil) {
      if (kurangiKesempatan == 0) {
        alert("anda gagal, angka yang dicari adalah " + hasil);
      } else {
        alert("Terlalu RENDAH!\nSisa kesempatan : " + kurangiKesempatan);
      }
    } else if (player >= hasil) {
      if (kurangiKesempatan == 0) {
        alert("anda gagal, angka yang dicari adalah " + hasil);
      } else {
        alert("Terlalu TINGGI!\nSisa kesempatan : " + kurangiKesempatan);
      }
    } else {
      alert(" yang anda masukan bukan angka!");
      kesempatan = 0;
    }
  }
  // Mengulang
  ulang = confirm("lagi?");
}
// Keluar dari Pengulangan
alert("terimakasih telah bermain!");
