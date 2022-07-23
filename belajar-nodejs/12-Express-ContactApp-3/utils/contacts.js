const fs = require("fs");
const { isArgumentsObject } = require("util/types");

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

// mengambil semua data yang ada di contact.json
const loadContact = () => {
  const file = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);
  return contacts;
};

// cari contact berdasarkan nama
const findContact = (cariNama) => {
  const contacts = loadContact();
  const contactYgDicari = contacts.find((contact) => contact.nama.toLowerCase() === cariNama.toLowerCase());
  return contactYgDicari;
};

// Menuliskan / menimpa file contacts.json dengan data yang baru
// Argument contacts berisi nilai object
const saveContacts = (contacts) => {
  // Argument contacts yang berisi object diubah menjadi string lalu, ditimpa ke file contacts.json .
  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
};

// Menambahkand data contact baru
const addContact = (contact) => {
  const contacts = loadContact();
  // Mengload contact lalu mengepush isi dari argument contact, yang berisi object input dari form.
  contacts.push(contact);
  // lalu memasukan kedalam parameter dari saveContact, yang didalamnya mengubah object menjadi string agar bisa digunakan diload di halamna contact.
  saveContacts(contacts);
};

// Cek nama yang duplikat
const cekDuplikat = (nama) => {
  // mengambil semua data di contact.json dan memasukkan nya kedalam var contacts.
  const contacts = loadContact();
  // mereturn var contacts lalu mencari semua data contact dan dikondisikan, jika data contact yang bernilai sama dengan parameter nama di cekDuplikat.
  return contacts.find((contact) => contact.nama === nama);
};

// Hapus Contact
const deleteContact = (nama) => {
  // Mengambil semua isi dari contact.json
  const contacts = loadContact();
  // Mengfilter seluruh data di dalam contact.json, Menyaring semua data contact.nama yang tidak sama dengan isi dari argument nama.
  const filteredContacts = contacts.filter((contact) => contact.nama !== nama);
  // mengsave / menimpa data contact yang sudah di filtering ke file contact.json
  saveContacts(filteredContacts);
};

// Mengubah contacts
const updateContacts = (contactBaru) => {
  const contacs = loadContact();
  // Hilangkan Contact lama yang namanya sama dengan oldNama
  const filteredContacts = contacs.filter((contact) => contact.nama !== contactBaru.oldNama);

  // Menghapus properti dengan cara dibawah ini
  delete contactBaru.oldNama;
  // Mengepush isi dari contactBaru ke dalam array filteredContacts.
  filteredContacts.push(contactBaru);
  // lalu mengsave / menimpa data contact yang sudah difiltering.
  saveContacts(filteredContacts);
};

module.exports = { loadContact, findContact, addContact, cekDuplikat, deleteContact, updateContacts };
