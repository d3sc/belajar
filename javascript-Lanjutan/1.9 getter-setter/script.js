class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  //!  menggunakan get dan set itu seperti menggunakan property dan bukan method, dan cara pemanggilan nya juga berbeda.

  // menggunakan get untuk mendapatkan data
  //* bedanya dengan function adalah, pada saat dipanggil get tidak perlu menggunakan ();
  //* dan jika menggunakan get pasti ada set, dan sebaliknya
  //* jika ingin mengambil data tidak boleh ada parameter.
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  //  menggunakan get untuk merubah data
  //*  set hanya mempunyai satu parameter
  set fullName(value) {
    console.log(`ubah fullName menjadi ${value}`);
    // split digunakan untuk memisah
    const array = value.split(" ");
    this.firstName = array[0];
    this.lastName = array[1];
  }
}

// membuat object person baru, ikbar
const ikbar = new Person("ikbar", "rabbani");

// Mengganti firstName menjadi rusdi
// dan ketika dijalankan maka dia akan menyambungkan menjadi rusdi rabbani, nama ikbar diganti.
ikbar.firstName = "rusdi";

// mengubah fullName menggunakan set
ikbar.fullName = "Upil Rebus";
ikbar.fullName = "Upil Goreng";
ikbar.fullName = "ikbar rabbani";

//* Pemanggilannya tidak perlu seperti function yang menggunakan () diakhirnya.
// Memanggil fullName dengan get
console.log(ikbar.fullName);
