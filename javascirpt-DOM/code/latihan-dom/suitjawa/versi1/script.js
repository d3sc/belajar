// membuat suit jawa

let ulang = true;

while (ulang) {
  let player1 = prompt("masukan nilai \ngajah,orang, dan semut");
  let com = Math.random();

  if (com < 0.34) {
    com = "gajah";
  } else if (com > 0.34 && com < 0.64) {
    com = "orang";
  } else {
    com = "semut";
  }

  let win = "menang";
  let lose = "kalah";
  let same = "seri";

  let hasil = "";
  if (player1 == com) {
    hasil = same;
  } else if (player1 == "gajah") {
    hasil = com == "orang" ? win : lose;
  } else if (player1 == "orang") {
    hasil = com == "semut" ? win : lose;
  } else if (player1 == "semut") {
    hasil = com == "gajah" ? win : lose;
  } else if (player1 == null) {
    alert("anda tidak memasukan pilihan");
  } else {
    alert("anda memasukan pilihan yang salah");
  }

  alert("komputer memilih " + com + "\n" + hasil);

  ulang = confirm("apakah ingin diulang?");
}
