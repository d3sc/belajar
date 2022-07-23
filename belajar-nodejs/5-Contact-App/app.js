const yargs = require("yargs");
const contacts = require("./contacts");

// console.log(yargs.argv);

// cara ke 1 menambahkan command dengan yargs
// yargs.command(
//   "add" /* Command / untuk memberikan command */,
//   "Menambahkan contact baru" /* Description / untuk mengisi penjelasan / deskripsi*/,
//   () => {} /* Builder yang hanya dapat diisi dengan function atau object*/,
//   (argv) => {
//     console.log(argv.nama);
//   } /* Handler / Perintah yang akan dilakukan */
// );

// cara ke 2 menambahkan command dengan yargs
yargs
  .command({
    command: "add",
    describe: "Menambahkan contact baru",
    builder: {
      /*builder adalah ketika perintah add dijalankan ada yang harus di isi. ada 3 yaitu nama, email, dan no hp. / Mirip seperti Parameter pada Function*/
      nama: {
        describe: "Nama lengkap" /* deskripsi */,
        demandOption: true /* Untuk menentukan wajib / tidak wajibnya diisi, jika true artinya wajib diisi */,
        type: "string" /* tipe data dari isi properti nama */,
      },
      email: {
        describe: "email",
        demandOption: false,
        type: "string",
      },
      noHp: {
        describe: "Nomor handphone",
        demandOption: true,
        type: "string",
      },
    },
    handler: function (argv) {
      contacts.simpanContact(argv.nama, argv.email, argv.noHp);
    },
  })
  .demandCommand();

// Menampilkan Nama dan nomor HP Contact
yargs.command({
  command: "list",
  describe: "Menampilkan Semua nama & no HP Contact",
  handler() {
    contacts.listContact();
  },
});

// Menampilkan Detail Sebuah Contact
yargs.command({
  command: "detail",
  describe: "Menampilkan contact secara detail berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    contacts.detailContact(argv.nama);
  },
});

// Menghapus contact
yargs.command({
  command: "remove",
  describe: "menghapus contact berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    contacts.removeContact(argv.nama);
  },
});

yargs.parse();
