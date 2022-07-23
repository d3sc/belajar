const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = 3000;

// memberitahu express agar dapat menggunakan view engine ejs, view engine berguna untuk melakukan operasi logika seperti pengulangan, pengkondisian, dll.
// dengan cara menggunakan <%= %>
app.set("view engine", "ejs");
app.use(expressLayouts);

app.get("/", (req, res) => {
  // res.sendFile("./html/index.html", { root: __dirname });

  // membuat variable mahasiswa yang didalamnya ada object.
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

  // penjelasan method render
  // argument pertama dari method render adalah nama file yang akan dijalankan ketika membuka alamat yang diberikan di method get() argument pertama, lalu untuk argument kedua diberikan object untuk menambahkan variable pada file yang ditentukan.

  // gambaran penggunaan method render
  // gambaran argument 1, jika alamat membuka localhost:3000/ . maka akan membuka / merespons file index.ejs .
  // gambaran argument 2, jika diberikan object maka akan membuat variable. contohnya dibawah ini diberikan title maka akan berpengaruh pada file yang ada di index.ejs .

  res.render("index.ejs", {
    layout: "layouts/main-layout" /* Menggunakan property layout pada object untuk memilih layout mana yang akan digunakan, lalu value-nya adalah alamat file dari layout yang digunakan. */,
    nama: "ikbar" /* nama adalah key dan "ikbar" adalah value */,
    title: "Main Site",
    mahasiswa /* Jika key dan value-nya sama kita tidak perlu menuliskan dua duanya. */,
  }); /* dengan menggunakan render, kita tidak perlu menuliskan root. dan untuk Parameter kedua diisi dengan object variable yang digunakan kedalam index. */
});

app.get("/about", (req, res) => {
  // res.sendFile("./html/about.html", { root: __dirname });
  res.render("about.ejs", {
    layout: "layouts/main-layout",
    title: "About Page",
  });
});

app.get("/contact", (req, res) => {
  // res.sendFile("./html/contact.html", { root: __dirname });

  res.render("contact.ejs", {
    layout: "layouts/main-layout",
    title: "Contact Page",
  });
});

app.get("/product/:id", (req, res) => {
  res.send(`Product ID : ${req.params.id} <br> Category ID : ${req.query.category}`);
});

app.use("/", (req, res) => {
  res.status(404);
  res.send(`<h1>404</h1>`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
