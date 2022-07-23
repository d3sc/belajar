// function jumlahVolumeDuaKubus(a, b) {
//   var volumeA;
//   var volumeB;
//   var hasil;

//   volumeA = a * a * a;
//   volumeB = b * b * b;

//   hasil = volumeA + volumeB;

//   return hasil;
// }

// function jumlahVolumeDuaKubus(a, b) {
//   return a * a * a + b * b * b;
// }

// console.log(jumlahVolumeDuaKubus(10, 15));
// console.log(jumlahVolumeDuaKubus(20, 15));

// Menyeleksi tag p pada html
const p = document.querySelector(".nama");
const p2 = document.querySelector(".kelas");
const pendapat1 = document.getElementsByClassName("pendapat")[0];
const sectionA = document.getElementById("a");

function PrintText(nama, kelas, pendapat) {
  // Mengubah isi tag p pada html
  p.innerHTML = "nama saya : " + nama;
  p2.innerHTML = "kelas : " + kelas;
  pendapat1.innerHTML = "pendapat saya adalah : " + pendapat;
  const pBaru = document.createElement("p");
  const isiPbaru = document.createTextNode("siswa baru");
  pBaru.appendChild(isiPbaru);
  sectionA.insertBefore(pBaru, p);
}

function siswaLama() {
  // auto complete
  p.innerHTML = "nama saya : ikbar";
  p2.innerHTML = "kelas : X,RPL";
  pendapat1.innerHTML = "pendapat saya adalah : Suka makan bakso";
  // membuat p baru dan menaruhdi atas nama
  const pBaru = document.createElement("p");
  const isiPbaru = document.createTextNode("siswa lama");
  pBaru.appendChild(isiPbaru);
  sectionA.insertBefore(pBaru, p);
}

let namaSaya = prompt("Masukan password");
if (namaSaya == "i" || namaSaya == "r") {
  siswaLama();
} else {
  let kelasSaya = prompt("kelas mu");
  let pendapatSaya = prompt("apa pendapat mu tentang sekolah?");
  PrintText(namaSaya, kelasSaya, pendapatSaya);
}
