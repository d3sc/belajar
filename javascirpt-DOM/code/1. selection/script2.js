// DOM Selection 2

// document.querySelector() mengembalikan 1 element
// jika menggunakan querySelector yang akan diselect hanya satu elemen, dan elemen yang di select itu yang paling atas.
const p4 = document.querySelector("#b p"); /* menyeleksi dengan cara yang sama seperti selector yang ada pada css. */
p4.style.color = "green";
p4.style.fontSize = "2em";

const li2 = document.querySelector("section#b ul li:nth-child(2)");
li2.style.color = "red";
li2.style.backgroundColor = "#ccc";

// const p = document.querySelector("p"); /* ini contohnya hanya dapat mengseleksi 1 elemen saja yang berada paling ata, jika itu di css itu akan menyeleksi semua paragraf. */
// p.innerHTML = "mengubah dengan javascript";

// dengan itu kita perlu menggunakan
// document.querySelectorAll() mngembalikan banyak element dengan array
// fungsinya adalah untuk menyeleksi lebih dari 1 elemen.

const p = document.querySelectorAll("p");
for (let i = 0; i < p.length; i++) {
  p[i].innerHTML = "mengubah dengan Javascript";
}
