// Tagged Templates
// const nama = "ikbar",
//   umur = 16;

// function coba(strings, ...values) {
//   /* Strings untuk melihat String yang masuk pada Function  */
//   /* ...values adalah sebuah parameter untuk melihat isi dari semua expresssion ( ${} ) dari template literals dan nama variablenya tidak harus values */
//   //   let result = "";

//   //   strings.forEach((str, i) => {
//   //     result += `${str} ${values[i] || ""}`;
//   //   });
//   //   return result;

//   return strings.reduce((result, str, i) => `${result} ${str} ${values[i] || ""}`, "");
// }

// let str = coba`halo nama saya ${nama}, umur saya ${umur} tahun.`; /* String ini akan langsung masuk ke function coba */

// console.log(str);

// Hightlight

// Tagged Templates
const nama = "ikbar",
  umur = 16,
  email = "ikbar686@gmail.com";

function hightlight(strings, ...values) {
  return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ""}</span>`, "");
}

let str = hightlight`halo nama saya ${nama}, umur saya ${umur} tahun. hubungi saya di ${email}`;

document.body.innerHTML = str;
