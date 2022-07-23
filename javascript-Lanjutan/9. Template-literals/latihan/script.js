// Template Literals latihan

// 1. HTMl Fragments
// const mhs = {
//   nama: "ikbar",
//   umur: 16,
//   nrp: 03243563,
//   email: "ketipang@gmail.com",
// };

// const el = `<div class="mhs">
//       <h2>${mhs.nama}</h2>
//       <span class="nrp">${mhs.nrp}</span>
// </div>`;

//  2. Looping
// const mhs = [
//   /* array */
//   {
//     /* Object */
//     nama: "ikbar",
//     email: "ikbar@gmail.com",
//   },
//   {
//     nama: "ikbar2",
//     email: "ikbar@gmail.com",
//   },
//   {
//     nama: "ikbar3",
//     email: "ikbar@gmail.com",
//   },
//   {
//     nama: "tipang",
//     email: "Tikus",
//   },
// ];
// bagian ul, adalah bagian yang ingin diubah menggunakan map. sebanyak object yang di isikan pada array.
// Karena variable mhs bersifat object maka jika ingin mengubah object maka harus memanipulasi nya dengan menggunakan map.
// const el = `<div class ="mhs">
//     ${mhs
//       .map(
//         (m) => `<ul>
//     <li>${m.nama}</li>
//     <li>${m.email}</li>
// </ul>`
//       )
//       .join("")}
// </div>`;

// /* join adalah fungsi yang berguna untuk menghilangkan koma / apapun itu pada penghubung pada array nya */

// 3. Conditionals
// ternary
// const lagu = {
//   /* Ini object */
//   judulLagu: "Ada Apa Dengan Mu",
//   Penyanyi: "Peter Pan",
//   //   feat: "Orang Keren" /* Jika feet di uncomment maka yang terjadi adalah feat akan tidak terlihat */,
// };

// // cara membaca ternary conditions pada kasus ini adalah :
// // ${lagu.feat ? `(feat. ${lagu.feat})` : ""} /* Ini harus di dalam Interpolation ${} */
// // apakah ada lagu.feat pada object ? jika ada tampilkan (feat. ${lagu.feat}) jika tidak isi dengan string kosong : ""
// const el = `<ul>
//     <li>${lagu.judulLagu}</li>
//     <li>${lagu.Penyanyi} ${lagu.feat ? `(feat. ${lagu.feat})` : ""}</li>
// </ul>`;

// 4. Nested
// HTML Fragments Bersarang

const pelajar = {
  /* Object */
  nama: "Luspi",
  kelas: 6,
  pelajaran: ["B.Indo", "MTK", "IPA", "IPS", "Bahasa Inggris"],
};

// Membuat function cetak pelajaran
function cetakPelajaran(pelajaran) {
  return `
    <ol>
        ${pelajaran.map((p) => `<li>${p}</li>`).join("")}
    </ol>
    `;
}

// Membuat HTML Fragments
const el = `
    <h2>${pelajar.nama}</h2>
    <span>semester : ${pelajar.kelas}</span>
    <h4>Pelajaran</h4>
    ${cetakPelajaran(pelajar.pelajaran)}
`;

document.body.innerHTML = el;
console.log(el);
