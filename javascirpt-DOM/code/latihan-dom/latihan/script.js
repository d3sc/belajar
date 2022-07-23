// for (var i = 0; i <= 100; i++) {
//   let pilihan = confirm("yes or no");

//   let scoreP1 = 0;
//   let scoreP2 = 0;
//   if (pilihan == true) {
//     scoreP1 = i;
//   } else {
//     scoreP2 = i;
//   }

//   console.log(scoreP1 + " " + scoreP2);
// }

let p1 = 0;
let p2 = 0;

function score() {
  let hasil = null;
  for (let i = 1; i <= 3; i++) {
    let pilihan = confirm();

    if (pilihan == true) {
      console.log(`p1 = ${(p1 += 1)} dan p2 = ${p2} p1 menang`);
    } else {
      console.log(`p1 = ${p1} dan p2 = ${(p2 += 1)} p2 menang`);
    }
  }
  if (p1 < p2) {
    hasil = console.log("p2 menang");
  } else if (p1 > p2) {
    hasil = console.log("p1 menang");
  } else {
    hasil = console.log("Seri!");
  }
  return;
}

score();
