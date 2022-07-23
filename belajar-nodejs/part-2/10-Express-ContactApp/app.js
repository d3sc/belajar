const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const { loadContact, findContact } = require("./utils/contacts");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.static("public"));

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
  // Mnegambil function loadContact dari contacts.js yang sudah di require di atas, dan menjadikan file JSON (hasil dari var contacts itu JSON).
  const contacts = loadContact();
  res.render("contact.ejs", {
    layout: "layouts/main-layout",
    title: "Contact Page",
    // setelah data diambil akan dirender/dimasukan ke dalam var contacts
    contacts,
  });
});
// Perbedaan dari dari contact di atas adalah dia mempunyai params nama ("/contact/:nama") /:nama adalah params.
app.get("/contact/:nama", (req, res) => {
  // membuat var contact yang didalamnya teradpat function findContact berparameter dari params nama.
  const contact = findContact(req.params.nama);

  res.render("detail.ejs", {
    title: "Contact Page",
    layout: "layouts/main-layout",
    // memasukan isi data yang sudah diolah dari var contact;
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
