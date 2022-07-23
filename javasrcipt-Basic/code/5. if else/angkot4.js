// var x = 50;
// var y = 25;

// for (var z = 1; z <= x; z++) {
//   if (z <= y) {
//     console.log("hello world! " + z + "x");
//   } else {
//     console.log("hello worl.. error! " + z + "x");
//   }
// }

var jumlhAngkot = 10;
var angkotBeroperasi = 6;
var angkotLembur = 1;

for (var noAngkot = 1; noAngkot <= jumlhAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi) {
    console.log("Angkot No. " + noAngkot + " Beroperasi dengan baik");
  } else if (noAngkot === 8) {
    console.log("Angkot No. " + noAngkot + " Sedang lembur");
  } else {
    console.log("Angkot No. " + noAngkot + " Sedang tidak dapat beroperasi");
  }
}
