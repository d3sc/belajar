const fs = require("fs");
const chalk = require("chalk");
const validator = require("validator");

// console.log("data membuat folder dan file jalan");
// membuat folder data jika belum ada
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  console.log("folder telah dibuat");
  fs.mkdirSync(dirPath);
}

// Membuat file jika belum ada
const dataPath = "./data/contacts.json";

if (!fs.existsSync(dataPath)) {
  console.log("file telah dibuat");
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

const loadContact = () => {
  const file = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);
  return contacts;
};

const simpanContact = (nama, email, noHp) => {
  const isiContact = { nama, email, noHp }; /* Mengambil isi dari Contact dengan object */
  // const file = fs.readFileSync("data/contacts.json", "utf-8"); /* Melihat/Membaca file contact.json yang ada di direktori data */
  // const contacts = JSON.parse(file); /* mengubah isi var file menjadi JSON */
  const contacts = loadContact();

  // cek duplikat value nama
  const duplikat = contacts.find((contact) => contact.nama === nama);

  if (duplikat) {
    /* Pengkondisian dengan nilai truty or falsy, jika duplikat bernilai true maka akan masuk kedalam if dan jika duplikat bernilai false maka akan lewat dan tidak masuk kedalam. */
    console.log(chalk.red.inverse("Contact sudah terdaftar, Gunakan nama lain!"));
    return false; /* Gunakan ini untuk memberhentikan function, agar tidak melanjutkan perintah kebawah. */
  }

  // cek format Email
  // kalau email bernilai true masuk kedalam if
  if (email) {
    // kalau email tidak memiliki format email maka akan masuk ke if
    if (!validator.isEmail(email)) {
      console.log(chalk.red.inverse("Email tidak valid, coba lagi!"));
      return false;
    }
  }

  // cek noHp

  if (!validator.isMobilePhone(noHp, "id-ID")) {
    console.log(chalk.red.inverse("Nomor HP tidak valid, coba lagi!"));
    return false;
  }

  contacts.push(isiContact); /* memasukan isi dari var isicontact yang bertipe object kedalam var contacts yang berformat JSON, agar pada saat mengisi file akan menjadi object. */

  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts)); /* Menargetkan file contact.json, lalu mengisi file dengan isi dari variable contacts dan mengubahnya menjadi string yang tadinya berformat JSON. */

  console.log(chalk.cyan.inverse(`Terima Kasih ${nama} pesan mu telah terbaca!`));
};
// console.log("file contact selesai");

// List Contact
const listContact = () => {
  const contacts = loadContact();
  console.log(chalk.cyan.inverse("Daftar Contact : "));

  contacts.forEach((contact, i) => {
    console.log(`${i + 1}. ${contact.nama} - ${contact.noHp} `);
  });
};

const detailContact = (cariNama) => {
  const contacts = loadContact();

  const contact = contacts.find((contact) => contact.nama.toLowerCase() === cariNama.toLowerCase());

  if (!contact) {
    console.log(chalk.red.inverse(`${cariNama} tidak ditemukan!`));
    return false;
  }

  console.log(chalk.cyan.inverse("Nama = " + contact.nama));
  console.log("noHp = " + contact.noHp);
  let email = contact.email;
  if (email == undefined) email = "( Email tidak di isi! )";
  console.log("email = " + email);
};

const removeContact = (nama) => {
  // array lama
  const contacts = loadContact();

  // membuat array beru
  const newContact = contacts.filter((contact) => contact.nama.toLowerCase() !== nama.toLowerCase());

  if (contacts.length === newContact.length) {
    console.log(chalk.red.inverse(`${nama} tidak ditemukan!`));
    return false;
  }

  fs.writeFileSync("data/contacts.json", JSON.stringify(newContact));
  console.log(chalk.cyan.inverse(`data contact ${nama} berhasil dihapus!`));
};

module.exports = { simpanContact, listContact, detailContact, removeContact };
