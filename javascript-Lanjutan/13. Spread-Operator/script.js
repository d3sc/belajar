// Spread Operator ( ... )
// fungsinya adalah memecah iterables menjadi single element

// // 1. Memecah Array
// const mhs = ["ikbar", "rabbani", "purwanto"];

// console.log(...mhs); /* dengan adanya Spread maka jadi memecah element yang terdapat di dalam array, menjadi satu persatu. */

// 2. Menggabung 2 array

// const mhs = ["ikbar", "rabbani", "purwanto"];
// const dosen = ["ruspi", "rudy", "kuspli"];
// // lebih fleksibel menggunakan Spread Operator, jika ingin menambahkan array ditengah tengah.
// // const orang = [...mhs, "tipang", ...dosen]; /* Menggabung array mhs dan dosen, jika tidak menggunakan spread maka yang terjadi adalah array di dalam array. */
// const orang = mhs.concat(dosen); /* method concat juga sama kegugaannya seperti contoh spread di atas, yaitu sama sama menggabungkan array. TETAPI lebih fleksibel menggunakan Spread Operator */

// console.log(orang.join(" ")); /* Join untuk menjadikan type data menjadi string */
// 3. Mengcopy array

// const mhs = ["ikbar", "rabbani", "purwanto"];
// const mhs1 = [...mhs]; /* dengan menggunakan Spread dapat melakukan copy array */
// mhs1[0] = "saya"; /* mengubah array index ke-0, menjadi saya. dan lihat perbedaan kedua array tersebut */
// console.log(mhs);

// 4. mengubah list yang ada di html menjadi array
// const liMhs = document.querySelectorAll("li");

// // 4.1 cara pertama

// const mhs = [];

// for (let i = 0; i < liMhs.length; i++) {
//   mhs.push(liMhs[i].textContent);
// }

// console.log(mhs);
// 4.2 Cara kedua

// const mhs = [...liMhs].map((m) => m.textContent); /* Menggunakan spread untuk mengubah nodelist menjadi Array, lalu dilakukan higher order function menggunakan map.  */
// console.log(mhs);

// 5. menerapkan Spread dalam kasus HTML dan CSS

// Mengseleksi Class nama
const nama = document.querySelector(".nama");

// Memecah kata yang berada pada h1, Class nama
const huruf = [...nama.innerHTML].map((h) => `<span>${h}</span>`).join(""); /* Join merubah array menjadi string, dan MAP membungkus di setiap huruf menjadi span  */

// memperbarui Kata h1 dan menambahkan pecahaan kata yang sudah di proses di atas.
nama.innerHTML = huruf;
