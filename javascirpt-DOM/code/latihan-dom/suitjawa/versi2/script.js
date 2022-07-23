// membuat fungsi pilihan computer
function getpilihanComputer() {
  let com = Math.random();

  if (com < 0.34) return "gajah";
  if (com > 0.34 && com < 0.64) return "orang";
  return "semut";
}

// membuat fungsi hasil
const win = "menang";
const lose = "kalah";
const same = "seri";

function getHasil(com, player1) {
  if (player1 == com) {
    return same;
  }
  if (player1 == "gajah") return com == "orang" ? win : lose;
  if (player1 == "orang") return com == "semut" ? win : lose;
  if (player1 == "semut") return com == "gajah" ? win : lose;
}

function putar() {
  const imgComputer = document.querySelector(".img-komputer");
  const gambar = ["gajah", "orang", "semut"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
}

// versi simple
// menambahkan event pada gambar yang pilih
const liImg = document.querySelectorAll("li img");
const info = document.querySelector(".info");
const scoreComputer = document.querySelector(".scoreComputer");
const scorePlayer = document.querySelector(".scorePlayer");

liImg.forEach(function (pil) {
  pil.addEventListener("click", function () {
    info.innerHTML = "loading...";
    const pilihanComputer = getpilihanComputer();
    const pilihanPlayer = pil.className;
    var hasil = getHasil(pilihanComputer, pilihanPlayer);

    putar();

    setTimeout(function () {
      const imgComputer = document.querySelector(".img-komputer");
      imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

      info.innerHTML = hasil;
      return hasil;
    }, 1000);
  });
  // console.log(hasil);
});

// let p1 = 0;
// let p2 = 0;

// function score() {
//   // console.log(hasil);
//   // let hasilAkhir = null;
//   for (let i = 1; i <= 5; i++) {
//     // let pilihan = confirm();
//     if (hasil == win) {
//       console.log(`p1 = ${(p1 += 1)} dan p2 = ${p2} p1 menang`);
//     } else if (hasil == lose) {
//       console.log(`p1 = ${p1} dan p2 = ${(p2 += 1)} com menang`);
//     }
//   }
// if (p1 < p2) {
//   hasilAkhir = console.log("p2 menang");
//   return hasilAkhir;
// } else if (p1 > p2) {
//   hasilAkhir = console.log("p1 menang");
//   return hasilAkhir;
// } else {
//   hasilAkhir = console.log("Seri!");
//   return hasilAkhir;
// }
// }
// score();
// function score() {
//   const scoreComputer = document.querySelector(".scoreComputer");
//   const scorePlayer = document.querySelector(".scorePlayer");

//   let counter = 0;

//   if (player1 == win) {
//     return function () {
//       scorePlayer = counter += 1;
//       return console.log(scorePlayer);
//     };
//   } else {
//     return function () {
//       scoreComputer = counter += 1;
//       return console.log(scoreComputer);
//     };
//   }
// }

//

// tugas membuat score

// versi ribet
// menambahkan event pada gambar yang pilih
// mengambil gajah
// const pGajah = document.getElementsByClassName("gajah");
// pGajah[0].addEventListener("click", function () {
//   const pilihanComputer = getpilihanComputer();
//   const pilihanPlayer = pGajah[0].className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;

//   return hasil;
// });

// // mengambil Orang
// const pOrang = document.getElementsByClassName("orang")[0];
// pOrang.addEventListener("click", function () {
//   const pilihanComputer = getpilihanComputer();
//   const pilihanPlayer = pOrang.className;
//   const hasil = getHasil();

//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;

//   return hasil;
// });

// // mengambil semut
// const pSemut = document.getElementsByClassName("semut")[0];
// pSemut.addEventListener("click", function () {
//   const pilihanComputer = getpilihanComputer();
//   const pilihanPlayer = pSemut.className;
//   const hasil = getHasil();

//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;

//   return hasil;
// });
