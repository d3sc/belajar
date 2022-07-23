// making object

// Literal Object

// object
var orang1 = {
  // property
  nama: "ikbar",
  umur: 16,
  jurusan: "RPL",
};

// object
var orang2 = {
  // property
  nama: "keren",
  umur: undefined,
  jurusan: undefined,
};

//
// Function Declaration

// mendeklarasikan 1 kali lalu objectnya dapat dibuat berulang-ulang
function identitasOrang(nama, umur, jurusan) {
  // declaration object
  var identitas = {};
  // property
  identitas.nama = nama;
  identitas.umur = umur;
  identitas.jurusan = jurusan;
  return identitas;
}

var orang3 = identitasOrang("rabbani", 18, "tehnik listrik");

var orang4 = identitasOrang("suparti", 17, "tehnik industri");

//
// Constructor
// Nama function diawali dengan huruf besar jika ingin membuat constructor, jika ingin menuliskan dengan huruf kecil tidak akan error karena itu hanya membedakan kalau itu function constructor

function Orang(nama, umur, jurusan) {
  // tidak perlu membuat variable, karena kalau menggunakan this sudah dibuatkan oleh javascript variable this. (var this = {};)
  this.nama = nama;
  this.umur = umur;
  this.jurusan = jurusan;
  // tidak perlu menggunakan return, karena sudah dibuatkan oleh javascript return this. (return this;)
}

var orang5 = new Orang("despi", 15, "multimedia"); // jika tidak menggunakan new maka yang dipanggil adalah function declaration dan bukan function constructor, oleh karena itu jika yang dipanggil function declaration maka harus menggunakan var dan return.
