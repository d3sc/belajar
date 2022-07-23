const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const { body, validationResult, check } = require("express-validator");
const methodOverride = require("method-override");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

// merequire module mongoose.contact yang berada di file db.js
require("./utils/db.js");
// merequire data collections yang ada pada contact.js
const Contact = require("./model/contact.js");

const app = express();
const port = 3000;

// Setup Method Override
app.use(methodOverride("_method"));

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
    nama: "D3sc",
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

// ! harus disimpan sebelum Detail Contact karena jika tidak, add akan menjadi nama contact detail
// Halaman form tambah data contact
//* kalau route nya mengarah ke /contact/add maka tampilkan form tambah data contact.
app.get("/contact/add", (req, res) => {
  res.render("add-contact", {
    title: "Added Contact",
    layout: "layouts/main-layout",
  });
});

// * proses tambah data contact
app.post(
  "/contact",
  [
    // * Mengkonstum validator
    // TODO: parameter dari costum adalah nilai yang dimasukan user ketika mengisi input form.
    body("nama").custom(async (value) => {
      const duplikat = await Contact.findOne({ nama: value });
      // Jika duplikat berisi true maka akan masuk kedalam pengkondisian
      if (duplikat) {
        // dan menjalankan error
        throw new Error("Contact name already registered!");
      }
      // dan jika duplikat tidak berisi maka tidak akan masuk kedalam pengkondisian dan akan direturn nilai true.
      return true;
    }),
    check("email", "Invalid Email").isEmail(),
    check("noHp", "Invalid Num Phone").isMobilePhone("id-ID"),
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
      Contact.insertMany(req.body, (error, result) => {
        // TODO: Kirimkan FLash Message
        req.flash("msg", "Contact data successfully added!");
        res.redirect("/contact");
      });
    }
  }
);

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

// Form Edit Contact
app.get("/contact/edit/:nama", async (req, res) => {
  const contacts = await Contact.findOne({ nama: req.params.nama });

  res.render("edit-contact", {
    title: "Edit Contact",
    layout: "layouts/main-layout",
    contacts,
  });
});

// Proses Ubah data
app.put(
  "/contact",
  [
    // * Mengkonstum validator
    // TODO: parameter dari costum adalah nilai yang dimasukan user ketika mengisi input form.
    body("nama").custom(async (value, { req }) => {
      const duplikat = await Contact.findOne({ nama: value });

      // console.log(value !== req.body.oldNama && duplikat);
      // kalau value tidak sama dengan oldNama maka akan bernilai true, dan kalau duplikat berisi object dari contact maka akan bernilai true.
      if (value !== req.body.oldNama && duplikat) {
        // dan menjalankan error
        throw new Error("Contact name already registered!");
      }
      // dan jika duplikat tidak berisi maka tidak akan masuk kedalam pengkondisian dan akan direturn nilai true.
      return true;
    }),
    check("email", "Invalid Email").isEmail(),
    check("noHp", "Invalid Num Phone").isMobilePhone("id-ID"),
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
      // mengupdate data sesuai yang ada pada input form
      Contact.updateOne(
        // memilih data yang akan di update melalui id
        { _id: req.body._id },
        {
          // mengisi data yang ingin diperbarui sesuai pada input form
          $set: {
            nama: req.body.nama,
            noHp: req.body.noHp,
            email: req.body.email,
          },
        }
      ).then((result) => {
        // TODO: Kirimkan FLash Message
        req.flash("msg", "Contact data successfully change!");
        res.redirect("/contact");
      });
    }
  }
);

// * menghapus Contact
// app.get("/contact/delete/:nama", async (req, res) => {
//   const contact = await Contact.findOne({ nama: req.params.nama });

//   if (!contact) {
//     res.status(404);
//     res.send("<h1>404</h1><br><p>Data Contact tidak ditermukan!</p>");
//   } else {
//     // Menghapus contact dengan id contact yang ingin di hapus.
//     Contact.deleteOne({ _id: contact._id }).then((result) => {
//       req.flash("msg", "Contact data successfully Deleted!");
//       res.redirect("/contact");
//     });
//   }
// });

app.delete("/contact", (req, res) => {
  // Menerima semua hasil input yang ada didalam form.
  // res.send(req.body);

  // delete 1 bagian yang diambil dari input form yang mempunyai name nama.
  Contact.deleteOne({ nama: req.body.nama }).then((result) => {
    req.flash("msg", "Contact data successfully Deleted!");
    res.redirect("/contact");
  });
});

app.listen(port, () => {
  console.log(`Mongo Contact App | listening at http://localhost:${port}`);
});
