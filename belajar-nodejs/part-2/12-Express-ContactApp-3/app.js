const { urlencoded } = require("express");
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const { loadContact, findContact, addContact, cekDuplikat, deleteContact, updateContacts } = require("./utils/contacts");
const { body, validationResult, check } = require("express-validator");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
const { cookie } = require("express/lib/response");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
// salah satu third party middleware yang berfungsi untuk membuat layout halaman pada tiap tiap file, seperti di didalam folder layouts.
app.use(expressLayouts); /* Third party Middleware */
// middleware yang berfungsi untuk mengpublikasi file yang dilindungi oleh express
app.use(express.static("public")); /* built-in middleware */
// middleware yang berfungsi untuk mengparse data yang di-isi dari input form di add-contact.ejs
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
  const contacts = loadContact();
  res.render("contact.ejs", {
    layout: "layouts/main-layout",
    title: "Contact Page",
    contacts,
    msg: req.flash("msg"),
  });
});

// ! menuliskan ini harus di atas routes detail, agar dapat dijalankan sebelum routes detail.
// * Halaman form tambah data Contact
app.get("/contact/add", (req, res) => {
  res.render("add-contact", {
    title: "Added Contact",
    layout: "layouts/main-layout",
  });
});

// * proses data contact
// TODO: app.post untuk menerima input form dari method post yang ada di add-contact.ejs
// ! parameter dari method check / body harus sama dengan atribut name yang ada di input form.
app.post(
  "/contact",
  [
    // * Mengkonstum validator
    // TODO: parameter dari costum adalah nilai yang dimasukan user ketika mengisi input form.
    body("nama").custom((value) => {
      const duplikat = cekDuplikat(value);
      // Jika duplikat berisi sesuatu maka akan masuk kedalam pengkondisian
      if (duplikat) {
        // dan menjalankan error
        throw new Error("Contact name already registered!");
      }
      // dan jika duplikat tidak berisi maka tidak akan masuk kedalam pengkondisian dan akan direturn nilai true.
      return true;
    }),
    check("email", "Invalid Email").isEmail(),
    check("nohp", "Invalid Num Phone").isMobilePhone("id-ID"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    // TODO: Jika var errors tidak kosong, maka akan masuk kedalam pengkondisian
    if (!errors.isEmpty()) {
      res.render("add-contact", {
        title: "Added Contact",
        layout: "layouts/main-layout",
        // TODO: lalu akan membuat var errors yang disi object error yang berisi array yang didalamnya ada object error, lalu ditampilkan ke halaman error
        errors: errors.array(),
      });
    } else {
      // TODO: Kalau var errors kosong maka akan masuk kedalam else dan menjalankan pembuatan data.
      addContact(req.body);
      // TODO: Kirimkan FLash Message
      req.flash("msg", "Contact data successfully added!");
      res.redirect("/contact");
    }
  }
);

// * Proses Delete Contact

app.get("/contact/delete/:nama", (req, res) => {
  // ! Mengecek data contact di file json, karena jika tidak ada datanya maka akan terjadi error.
  // TODO: Memasukan data yang dicari ke dalam var contact;
  const contact = findContact(req.params.nama);

  // Jika contact tidak ada
  if (!contact) {
    res.status(404);
    res.send("<h1>404</h1><br><p>Data Contact tidak ditermukan!</p>");
  } else {
    deleteContact(req.params.nama);
    req.flash("msg", "Contact data successfully Deleted!");
    res.redirect("/contact");
  }
});

// Form Edit Contact
app.get("/contact/edit/:nama", (req, res) => {
  const contacts = findContact(req.params.nama);

  res.render("edit-contact", {
    title: "Edit Contact",
    layout: "layouts/main-layout",
    contacts,
  });
});

// Proses Ubah data
app.post(
  "/contact/update",
  [
    // * Mengkonstum validator
    // TODO: parameter dari costum adalah nilai yang dimasukan user ketika mengisi input form.
    body("nama").custom((value, { req }) => {
      const duplikat = cekDuplikat(value);
      // Jika duplikat berisi sesuatu maka akan masuk kedalam pengkondisian
      if (value !== req.body.oldNama && duplikat) {
        // dan menjalankan error
        throw new Error("Contact name already registered!");
      }
      // dan jika duplikat tidak berisi maka tidak akan masuk kedalam pengkondisian dan akan direturn nilai true.
      return true;
    }),
    check("email", "Invalid Email").isEmail(),
    check("nohp", "Invalid Num Phone").isMobilePhone("id-ID"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    // TODO: Jika var errors tidak kosong, maka akan masuk kedalam pengkondisian
    if (!errors.isEmpty()) {
      res.render("edit-contact", {
        title: "Edit Contact",
        layout: "layouts/main-layout",
        // TODO: lalu akan membuat var errors yang disi object error yang berisi array yang didalamnya ada object error, lalu ditampilkan ke halaman error
        errors: errors.array(),
        contacts: req.body,
      });
    } else {
      updateContacts(req.body);
      // // TODO: Kirimkan FLash Message
      req.flash("msg", "Contact data successfully change!");
      res.redirect("/contact");
    }
  }
);

// * Halaman Detail Contact

app.get("/contact/:nama", (req, res) => {
  const contact = findContact(req.params.nama);
  res.render("detail.ejs", {
    title: "Contact Page",
    layout: "layouts/main-layout",
    contact,
  });
});

app.use((req, res) => {
  res.status(404);
  res.send(`<h1>404</h1>`);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/`);
});
