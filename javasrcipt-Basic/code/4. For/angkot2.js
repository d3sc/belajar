var jumlhAngkot = 10;
var angkotBeroperasi = 6;

var noAngkot = 1;
while (noAngkot <= 6) {
  console.log("Angkot No. " + noAngkot + " Beroperasi dengan baik");

  noAngkot++;
}

for (var noAngkot = angkotBeroperasi + 1; noAngkot <= jumlhAngkot; noAngkot++) {
  /* variable dapat di isi dengan variable */
  console.log("Angkot No. " + noAngkot + " Beroperasi dengan tidak baik.");
}
