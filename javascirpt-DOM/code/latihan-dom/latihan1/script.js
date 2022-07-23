// kasus 1, membuat event pada tombol agar berubah warna
// menyeleksi tag p

const p = document.getElementById("text");

//

const tUbahWarna = document.getElementById("tUbahWarna");
const h1 = document.querySelector("h1");

tUbahWarna.addEventListener("click", function () {
  //   document.body.style.backgroundColor = "lightgreen"; /* body tidak usah diseleksi, dan langsung dapat di pasang. */
  document.body.classList.toggle("biru-muda");
});

// kasus 2, membuat tombol dari js dan warna random
const tAcakaWarna = document.createElement("button");
const textTombol = document.createTextNode("random color");

tAcakaWarna.appendChild(textTombol);

tAcakaWarna.setAttribute("type", "button");

tUbahWarna.after(tAcakaWarna);
tUbahWarna.style.marginRight = "50px";

tAcakaWarna.onclick = function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);

  p.innerHTML = "Button ( RGB = " + r + "," + g + "," + b + " )";

  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
};

// kasus 3, membuat warna rgb dengan slider

// menyeleksi ke slider di html
const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");

// event merah
sMerah.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  p.innerHTML = "Slider ( RGB = " + r + "," + g + "," + b + " )";

  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

// event hijau
sHijau.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  p.innerHTML = "Slider ( RGB = " + r + "," + g + "," + b + " )";

  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

// event biru
sBiru.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  p.innerHTML = "Slider ( RGB = " + r + "," + g + "," + b + " )";

  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

// kasus 4, menggerakan crusor = mengubah warna
const box = document.getElementById("box");
const pBox = document.querySelector(".box p");

box.addEventListener("mousemove", function (event) {
  // posisi mouse
  // console.log(event.clientX);
  // ukuran browser
  // console.log(window.innerWidth);
  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  const yPos = Math.round((event.clientY / window.innerHeight) * 200);

  document.body.style.backgroundColor = "rgb(" + xPos + "," + yPos + "," + xPos + ")";
  p.innerHTML = "Cursor ( RGB = " + xPos + "," + yPos + "," + xPos + " )";
  pBox.innerHTML = "";
});
