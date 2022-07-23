var x = prompt("Masukan makanan / minnuman \n (cth: nasi, daging, susu, hamburger, softdrink)");

// Versi simple
// switch (x) {
//   case "nasi":
//   case "daging":
//   case "susu":
//     alert("makanan/minuman SEHAT!");
//     break;
//   case "hamburger":
//   case "softdrink":
//     alert("Makanan/Minuman Tidak SEHAT!");
//     break;
//   default:
//     alert("anda memasukan nama makanan/minuman yang salah!");
//     break;
// }

// Versi Ribets
switch (x) {
  case "nasi":
    alert("makanan/minuman SEHAT!");
    break;
  case "daging":
    alert("makanan/minuman SEHAT!");
    break;
  case "susu":
    alert("makanan/minuman SEHAT!");
    break;
  case "hamburger":
    alert("makanan/minuman Tidak SEHAT!");
    break;
  case "softdrink":
    alert("Makanan/Minuman Tidak SEHAT!");
    break;
  default:
    alert("anda memasukan nama makanan/minuman yang salah!");
    break;
}
