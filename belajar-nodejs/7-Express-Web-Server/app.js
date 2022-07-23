const express = require("express");
const app = express();
const port = 3000;

// Halaman utama yang tidak diberi nama disebut root (localhost:3000/). dan kalau diberi nama (localhost:3000/about).
// Sementara Route adalah kondisi dimana user ingin memberikan nama pada halaman, contohnya app.get("/about", (req,res) => {}). di bagian "/about" itu adalah route.

app.get("/", (req, res) => {
  // res.send("Hello World!");
  /* response dapat mengembalikan json. */
  // res.json({
  //   nama: "ikbar",
  //   email: "ikbar@gmail.com",
  //   noHP: "08123456789",
  // });
  res.sendFile("./html/index.html", { root: __dirname }); /* root dirname adalah tempat dimana direktori file html berada */
});

// request adalah, apa yang dikirimkan ke express
// response adalah, apa yang dikembalikan dari express
// untuk melihat dokumentasi masing masing method itu ada di web expressjs
app.get("/about", (req, res) => {
  // res.send("Ini adalah halaman about");
  res.sendFile("./html/about.html", { root: __dirname });
});

app.get("/contact", (req, res) => {
  // res.send("Ini adalah halaman contact");
  res.sendFile("./html/contact.html", { root: __dirname });
});

// 1. Ini jika semua id nya berbentuk angka

// contoh cara penggunaan id adalah, http://localhost:3000/product/2/category/4 . disini 2 dan 4 itu adalah id nya dan di setiap id itu berbeda namanya, contohnya seperti kode di bawah ini.
// app.get("/product/:id/category/:idCat", (req, res) => {
//   res.send(`Product ID : ${req.params.id} <br> Category ID : ${req.params.idCat}`);
// });

// 2. ini jika semua id nya berbentuk kata

// Cara penulisan nya adalah, http://localhost:3000/product/2?category=shoes
app.get("/product/:id", (req, res) => {
  res.send(`Product ID : ${req.params.id} <br> Category ID : ${req.query.category}`); /* disini category adalah halaman yang dituliskan. */
});

// method use Bisa digunakan untuk menangani halaman yang tidak ada
app.use("/", (req, res) => {
  res.status(404);
  res.send(`<h1>404</h1>`);
});

// Akan menampilkan pesan ini jika server dijalankan.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// const http = require("http");
// const fs = require("fs");

// const port = 3000;

// const renderHTML = (path, res) => {
//   fs.readFile(path, (err, data) => {
//     /* Untuk membaca file secara asynchronous yang ada di file index.html. */
//     if (err) {
//       // Kalau Error masuk kedalam sini
//       res.writeHead(404);
//       res.write("Error: file not found!");
//     } else {
//       // Kalau tidak Error masuk kedalam sini.
//       res.write(data); /* Data diambil dari argument readFile */
//     }
//     res.end();
//   });
// };

// // Menambahkan modul http agar dapat membuat server
// http
//   // pada argument createServer req adalah request dan res adalah respons
//   .createServer((req, res) => {
//     // console.log(url); /* untuk mengecek url contoh urlnya seperti localhost:3000/tipang */

//     res.writeHead(200, {
//       "Content-Type": "text/html" /* Untuk mengubah yang tadinya hanya Plain text diubah menjadi text html. */,
//     });

//     const url = req.url;

//     // Melakukan pengkondisian menggunakan IF ELSE
//     // if (url === "/about") {
//     //   // res.write(`<h1>Ini adalah halaman about</h1>`); /* Mengisikan nilai kedalam halaman */
//     //   // res.end();

//     //   renderHTML("./about.html", res);
//     //   //
//     // } else if (url === "/contact") {
//     //   renderHTML("./contact.html", res);
//     // } else {
//     //   // Url selain 2 if di atas maka akan masuk kedalam sini.
//     //   renderHTML("./index.html", res);
//     // }

//     // Melakukan Pengkondisian dengan Switch

//     switch (url) {
//       case "/about":
//         renderHTML("./html/about.html", res); /* jika url mengarah ke halaman about, maka renderHTML akan membuat masuk ke dalam file about.html */
//         break; /* Break untuk keluar dari perkondisian */
//       case "/contact":
//         renderHTML("./html/contact.html", res); /* jika url mengarah ke halaman contact, maka renderHTML akan membuat masuk ke dalam file contact.html */
//         break; /* Break untuk keluar dari perkondisian */
//       default:
//         /* jika url mengarah selain kedua kondisi di atas, maka renderHTML akan membuat masuk ke dalam file index.html */
//         renderHTML("./html/index.html", res);
//         break; /* Break untuk keluar dari perkondisian */
//     }
//   })
//   .listen(port, () => {
//     console.log("server is listening on port " + port + ".."); /* Untuk mengecek jika server berhasil dijalankan. */
//   });
