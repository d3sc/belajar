const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const morgan = require("morgan");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

// Middleware adalah suatu aplikasi yang berada di tengah tengah antara request dan response

// 1. third-party middleware
// Third-party middleware adalah middleware yang di buat oleh orang lain, harus menginstal terlebih dahulu.
// expressLayouts dan morgan termasuk middleware third-party.
app.use(expressLayouts);
app.use(morgan("dev")); /* digunakan untuk menuliskan log kedalam console, dan mirip dengan console.log  */

// 2. build-in middleware

// didalam express js itu memproteksi file statis seperti video,foto,file css, file js, / file yang digunakan sebagai aset. tidak bisa diakses secara default.
// oleh karena itu method static adalah cara untuk memberitahu ke express kalau ingin membolehkan mempublikasi file statis seperti foto.
// dan parameter dari method static adalah public, public adalah nama folder yang berada di root, dan folder public juga bisa menyimpan file css.
app.use(express.static("public"));
// Kalau tidak ada static semua file statis akan dilindungi dan tidak bisa digunakan

// 3. Application level middleware

// disini ada beberapa method middleware, Yaitu app.use, app.get, dll.
// contoh simple kasus middleware,
// membuat middleware sederhana jika aplikasi dibuka, maka akan mencetak waktu pada saat aplikasi dibuka dan muncul di console.

app.use((req, res, next) => {
  console.log("Time :", Date.now());
  next(); /* fungsi next disitu adalah untuk mencari / menjalankan middleware berikutnya. */
});

app.get("/", (req, res) => {
  const mahasiswa = [
    {
      nama: "Ikbar",
      umur: 16,
    },
    {
      nama: "rusdi",
      umur: 15,
    },
  ];

  res.render("index.ejs", {
    layout: "layouts/main-layout",
    nama: "ikbar",
    title: "Main Site",
    mahasiswa,
  });
});

app.get("/about", (req, res) => {
  res.render("about.ejs", {
    layout: "layouts/main-layout",
    title: "About Page",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs", {
    layout: "layouts/main-layout",
    title: "Contact Page",
  });
});

app.get("/product/:id", (req, res) => {
  res.send(`Product ID : ${req.params.id} <br> Category ID : ${req.query.category}`);
});

app.use((req, res) => {
  res.status(404);
  res.send(`<h1>404</h1>`);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/`);
});
