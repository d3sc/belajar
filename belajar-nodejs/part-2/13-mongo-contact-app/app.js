const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

// merequire module mongoose.contact yang berada di file db.js
require("./utils/db.js");
// merequire data collections yang ada pada contact.js
const Contact = require("./model/contact.js");

const app = express();
const port = 3000;

// Setup EJS
app.set("view engine", "ejs");
app.use(expressLayouts); /* Third party Middleware */
app.use(express.static("public")); /* built-in middleware */
app.use(express.urlencoded({ extended: true })); /* Built-in middleware */

// konfigurasi flash
app.use(cookieParser("secret"));
app.use(
  session({
    cookie: { maxAge: 6000 },
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

// halaman Home
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

// Halaman About
app.get("/about", (req, res) => {
  res.render("about.ejs", {
    title: "Halaman About",
    layout: "layouts/main-layout.ejs",
  });
});

// Halaman Contact
app.get("/contact", async (req, res) => {
  //   Contact.find().then((contact) => {
  //     res.send(contact);
  //   });

  const contacts = await Contact.find();
  res.render("contact.ejs", {
    layout: "layouts/main-layout",
    title: "Contact Page",
    contacts,
    msg: req.flash("msg"),
  });
});

// * Halaman Detail Contact
// Penggunaan asyn await adalah untuk menunggu fungsi yang sedang dijalankan. fungsi contact yang sedang mencari data di dalam collection Contact, setelah dapat langsung dijalankan.
app.get("/contact/:nama", async (req, res) => {
  const contact = await Contact.findOne({ nama: req.params.nama });
  res.render("detail.ejs", {
    title: "Contact Page",
    layout: "layouts/main-layout",
    contact,
  });
});

app.listen(port, () => {
  console.log(`Mongo Contact App | listening at http://localhost:${port}`);
});
