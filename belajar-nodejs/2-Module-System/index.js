// const fs = require("fs"); /* Core module */
// const cetakNama = require("./coba"); /* local module */
// const moment = require("moment");

const cobaModule = require("./module"); /* file module akan berubah menjadi object */

// console.log(cobaModule);

// console.log(cobaModule.cetakNama("ikbar"), cobaModule.umur);

// console.log(cobaModule.siswa.cetakSiswa());

// console.log(new cobaModule.Orang());

console.log(cobaModule.cetakNama("ikbar"), cobaModule.umur, cobaModule.siswa.cetakSiswa(), new cobaModule.Orang());
