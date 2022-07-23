const fs = require("fs");

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

module.exports = { loadContact, findContact };
