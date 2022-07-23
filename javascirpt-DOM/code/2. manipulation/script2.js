// Manipulation DOM 2

// bagian ke 1

// membuat list item
const liBaru = document.createElement("li");

// membuat isi list item
const textLiBaru = document.createTextNode("list baru");

// memasukan isi list item kedalam list item.
liBaru.appendChild(textLiBaru);

// mempersempit scope ke ul
const ul = document.querySelector("section#b ul");

// mengseleksi list item yang ke dua
const li2 = ul.querySelector("li:nth-child(2)");

// memasukan list item yang baru/sudah dibuat ke atas li2
ul.insertBefore(liBaru, li2);

// bagian ke 2

// membuat p baru
const pBaru = document.createElement("p");

// membuat isi p baru
const textPBaru = document.createTextNode("paragraf baru");

// memasukan isi p baru kedalam p baru
pBaru.appendChild(textPBaru);

// mempersempit scope ke section#a
const sectionA = document.getElementById("a");

// memasukan p baru kedalam section#a
sectionA.appendChild(pBaru);

// removeChild and replaceChild

// removeChild untuk menghapus node pada html
// replaceChild untuk mengganti node html

const link = document.getElementsByTagName("a")[0];
sectionA.removeChild(link);

// mempersempit scope ke section #b
const sectionB = document.getElementById("b");

// menyeleksi paragraf ke 4
const p4 = document.querySelector("section#b p");

// membuat h2 baru
const h2Baru = document.createElement("h2");

// membuat isi h2 baru
const textH2Baru = document.createTextNode("Judul Baru!");

// memeasukan isi h2 kedalam h2
h2Baru.appendChild(textH2Baru);

// mengganti p4 menjadi h2 di scope sectionB
sectionB.replaceChild(h2Baru, p4);

// elemen yang baru
pBaru.style.backgroundColor = "lightgreen";
liBaru.style.backgroundColor = "lightgreen";
h2Baru.style.backgroundColor = "lightgreen";
