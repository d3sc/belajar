// Rest Parameter
// Kegunaannya
// untuk Mempresentasikan argument pada function dengan jumlah yang tidak terbatas dan menjadi sebuah array. / mengambil sisa dari parameter.

// 1. mengambil semua yang ditulis didalam parameter
// function myFunct(...myArgs) {
//   /* ...myArgs itu mengambil semua sisa nilai dari paremter lalu memasukannya ke dalam argument di myArgs*/
//   //   return `a = ${a}, b = ${b}, myArgs = ${myArgs}`; /* Mengambil sisa paramter yang tidak disebutkan di argument. */
//   return myArgs; /* Mengambil semua isi dari parameter dan direturn */
// }

// console.log(myFunct(1, 2, 3, 4, 5));

// 2. Menghitung semua angka yang diisi di parameter

// function jmlh(...angka) {
//   // let total = 0;
//   // for (const i of angka) {
//   //   total += i;
//   // }
//   // return total;

//   return angka.reduce((acc, cur) => acc + cur);
// }

// console.log(jmlh(10, 20, 3, 4, 5));

// 3. array destructuring
// sebuah contoh untuk membuat kelompok dengan array
// const kelompok1 = ["tipang", "kureps", "luopis", "kurspon", "logein"];
// const [ketua, wakil, ...anggota] = kelompok1;

// console.log(anggota); /* Untuk memanggil sisa yang berada pada ...anggota */

// 4. Object destructuring
// sebuah contoh untuk membuat team dengan object, lalu memilih bagian nya
// const team = {
//   pm: "kulips",
//   frontend: "koreps",
//   frontend2: "rupis",
//   backend: "guspli",
//   ux: "monfed",
//   devOps: "jupri",
// };

// const { pm, ...myTeam } = team;

// console.log(myTeam);

// 5. Filtering

function filterBy(type, ...args) {
  /* untuk index pertama dijadikan type, dan sisanya dijadikan nilai */
  return args.filter((a) => typeof a === type); /* untuk mengfilter type data dari parameter dibawah. fungsi typeof untuk mengecek tipe data dari parameter yang di isi, lalu === untuk menyamakan isi dari argument type. */
}

console.log(filterBy("number", 1, 2, "lopis", false, "kureps", true, 5, 3)); /* ini adalah contoh sususan tipe data yang ingin difilter */
