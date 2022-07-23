const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

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

// Membuat pertanyaan dengan mengubah ditiap tiap pertanyaan menjadi promise

const tulisPertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, (jawaban) => {
      resolve(jawaban);
    });
  });
};

const simpanContact = (nama, email, noHp) => {
  const isiContact = { nama, email, noHp }; /* Mengambil isi dari Contact dengan object */
  const file = fs.readFileSync("data/contacts.json", "utf-8"); /* Melihat/Membaca file contact.json yang ada di direktori data */
  const contacts = JSON.parse(file); /* mengubah isi var file menjadi JSON */

  // cek duplikat value
  const duplikat = contacts.find((contact) => contact.nama === nama);

  if (duplikat) {
    /* Pengkondisian dengan nilai truty or falsy, jika duplikat bernilai true maka akan masuk kedalam if dan jika duplikat bernilai false maka akan lewat dan tidak masuk kedalam. */
    console.log("Contact sudah terdaftar, Gunakan nama lain!");
    return false; /* Gunakan ini untuk memberhentikan function, agar tidak melanjutkan perintah kebawah. */
  }

  contacts.push(isiContact); /* memasukan isi dari var isicontact yang bertipe object kedalam var contacts yang berformat JSON, agar pada saat mengisi file akan menjadi object. */

  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts)); /* Menargetkan file contact.json, lalu mengisi file dengan isi dari variable contacts dan mengubahnya menjadi string yang tadinya berformat JSON. */

  console.log(`Thanks ${nama} your message has been receive`);
  rl.close(); /* Menutup readline */
};
// console.log("file contact selesai");

module.exports = { tulisPertanyaan, simpanContact };
