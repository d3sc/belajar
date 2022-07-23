// console.log(`console 1 \n console 2`); // \n (escape character) untuk menambahkan enter pada nilai

// Template Literal / Template String
// Backtick (``)

const nama = "ikbar";
const umur = 16;

// console.log(`halo, nama saya ${nama} dan umur saya ${umur} tahun.`); /* Ini jika menggunakan Template Literal */

// console.log("halo, nama saya " + nama + " dan umur saya " + umur + " tahun."); /* ini jika tidak menggunakan Template Literal. */

let a = 10;
let b = 15;

// console.log(`${a + b}, adalah jawabannya.`); /* Backtick dapat menuliskan variable dan perintah didalam nya / (interpolation) didalamnya. */

// 1. Embedded Expression

// console.log(`${1 + 1}`); /* dapat melakukan operasi hitungan */

// console.log(`${alert}`); /* dapat memanggil function */

// const x = 10;

// console.log(`${x % 2 == 0 ? "genap" : "ganjil"}`);

// 2. Html Fragment

const mhs = {
  nama: "ikbar",
  umur: 16,
  nrp: 03243563,
  email: "ketipang@gmail.com",
};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nrp">${mhs.nrp}</span>
</div>`;

console.log(el);
