const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/sekolah", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// // Menambah data ke var object Contact
// const contact1 = new Contact({
//   nama: "upils",
//   noHp: "0811223344",
//   email: "upls@gmail.com",
// });

// // mengsave data
// contact1.save().then((contact) => {
//   console.log(contact);
// });
