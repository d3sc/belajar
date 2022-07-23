// this

// var a = 10;
// console.log(window.a);

// cara 1 - function declaration
// function halo() {
//   console.log(this);
//   console.log("halo");
// }

// this.halo();
//this mengembalikan object global / membuat menjadi global

// cara kedua - object literal
// var obj = {
//   a: 10,
//   nama: "ikbar",
// };
// obj.halo = function () {
//   console.log(this);
//   console.log("halo");
// };

// obj.halo();
// this mengembalikan object yang bersangkutan

// cara ketiga - construction
function halo() {
  console.log(this);
  console.log("halo");
  console.log("kamu");
}
new halo();
// mengembalikan object yang baru dibuat
