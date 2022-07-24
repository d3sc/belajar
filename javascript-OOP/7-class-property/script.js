// Membuat class person
class Person {
  // Membuat arg dengan nama nilai1
  constructor(nilai1, umur) {
    // Membuat Property menggunakan this lalu nama property-nya.
    this.name = nilai1;
    this.umur = umur;
  }
  // Membuat method sayhello diluar constructor(), disarankan begitu!
  //   tidak peru menambahkan kata kunci function
  sayHello(nama) {
    console.log("halo " + nama + " nama saya " + this.name + ", umur saya " + this.umur);
  }
}

// Membuat var yang di isi dengan object baru dari person yang mempunyai parameter nama nya masing masing.
const ikbar = new Person("ikbar", 18);
const rusdi = new Person("rusdi", 17);

// Memanggil var yang sudah dibuat di atas.
console.log(ikbar.sayHello("tip"));
console.log(rusdi);
// console.log(rusdi.name);
