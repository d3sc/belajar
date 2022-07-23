// Events JavaScript
// ada 2 cara mendengarkan event, yaitu dengan :
// * event handler
//    - Inline HTML attribute
//    - Element method

// * addEventListener()

// dan perbedaan antara keduanya adalah, event handler hanya dapat menjalankan 1 perintah saja, jika ada 2 maka perintahnya akan tertimpa. sementara addEventListener dapat menjalankan 2 perintah sekaligus.

// untuk cara pertama tag p2 dengan mengubah html nya.

const p2 = document.querySelector(".p2");

function ubahP2() {
  p2.innerHTML = "sudah berubah";
  p2.style.backgroundColor = "lightblue";
  return p2;
}

// cara kedua tag p3 tidak perlu mengubah htmlnya.

const p3 = document.querySelector(".p3");
function ubahP3() {
  p3.style.backgroundColor = "lightblue";
  p3.innerHTML = "sudah berubah";
}

p3.onclick = ubahP3;

// cara ketiga

// const p4 = document.querySelector("section#b p");

// rencana 1 menggunakan onclick

// function aksiP4() {
//   p4.innerHTML = "keren";
//   p4.style.cursor = "pointer";
//   const liBaru = document.createElement("li");
//   const isiLiBaru = document.createTextNode("item baru");

//   liBaru.appendChild(isiLiBaru);

//   const ul = document.querySelector("section#b ul");

//   ul.appendChild(liBaru);
//   return aksiP4;
// }

// p4.onclick = aksiP4;

//
// rencana 2 menggunakan addEventListener untuk membuat li baru

const p4 = document.querySelector("section#b p");

p4.addEventListener("click", function () {
  // li sudah dibuat
  const liBaru = document.createElement("li");
  const isiLiBaru = document.createTextNode("item baru");

  liBaru.appendChild(isiLiBaru);

  //mempersempit scope ke ul
  const ul = document.querySelector("section#b ul");

  ul.appendChild(liBaru);
  return;
});

//
// gambaran Perbedaan kedua nya

// addEventListener, dapat menjalankan 2 perintah sekaligus.
// const p4 = document.querySelector("section#b p");

// p4.addEventListener("click", function () {
//   p4.style.backgroundColor = "lightblue";
// });

// p4.addEventListener("click", function () {
//   p4.style.backgroundColor = "white";
// });

// jika menggunakan event handler, maka dia akan menimpa perintah sebelumnya.
// function ubahWarnaP4() {
//   p4.style.backgroundColor = "lightblue";
// }
// function ubahTextP4() {
//   p4.style.color = "green";
// }

// p4.onclick = ubahWarnaP4;
// p4.onclick = ubahTextP4;
