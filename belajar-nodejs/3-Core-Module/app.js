// core module
// fs = file System

const fs = require("fs");

// 1. menuliskan string secara Synchronous

// try {
//   fs.writeFileSync("data/test.txt", "Hello World secara Synchronous!");
// } catch (e) {
//   console.log(e);
// }

// 2. Menuliskan string secara Asynchronous

// fs.writeFile("data/test.txt", "Hello World secara Asynchronous! (2)", (e) => console.log(e));

// 3. Membaca isi file (Synchronous)

// const data = fs.readFileSync("data/test.txt", "utf-8"); /* utf-8 untuk mengubah nilai awal buffer menjadi huruf latin */

// console.log(data);

// 4. membaca isi file (Asynchronous)
// fs.readFile("data/test.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// 5. Readline
// Untuk membuat pertanyaan pada terminal
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("what is your name? : ", (name) => {
  rl.question("what is your number phone? : ", (phone) => {
    // console.log(`Thanks ${name}! Your message has been receive`);
    // fs.writeFile("data/test.txt", `Your name is ${name} and Your number Phone is ${phone}.`, (e) => console.log(e));

    const isiContact = { name, phone }; /* Mengambil isi dari Contact dengan object */
    const file = fs.readFileSync("data/contact.json", "utf-8"); /* Melihat/Membaca file contact.json yang ada di direktori data */
    const contacts = JSON.parse(file); /* mengubah isi var file menjadi JSON */

    contacts.push(isiContact); /* Menimpa var contacts yang berformat JSON dengan isiContact yang bertipe object, agar pada saat mengisi file akan menjadi object */

    fs.writeFileSync("data/contact.json", JSON.stringify(contacts)); /* Menargetkan file contact.json, lalu mengisi file dengan isi dari variable contacts dan mengubahnya menjadi string yang tadinya berformat JSON. */

    console.log(`Thanks ${name} your message has been receive`);
    rl.close(); /* Menutup readline */
  });
});
