const mongoose = require("mongoose");

//* argument pertama dari mongoose.model adalah Contact, guna nya untuk membuat Collection baru di dbs sekolah.
//* argument kedua adalah konfigurasi untuk bagian yang di isi dengan data yang akan dimasukkan kedalam Collection Contact.
// ! jika nama dari collection berbentuk jamak maka itu automatis diterjemahkan oleh mongoDB.
const Contact = mongoose.model("Contact", {
  nama: {
    type: String /* bagian ini harus di isi dengan tipe data String */,
    required: true /* required artinya perlu di isi */,
  },
  noHp: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
});

module.exports = Contact;
