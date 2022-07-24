// Membuat class person
class Person {
  // Membuat arg dengan nama nilai1
  constructor(nilai1) {
    // Membuat Property menggunakan this lalu nama property-nya.
    this.name = nilai1;
  }
}

// Membuat var yang di isi dengan object baru dari person yang mempunyai parameter nama nya masing masing.
const ikbar = new Person("ikbar");
const rusdi = new Person("rusdi");

// Memanggil var yang sudah dibuat di atas.
console.log(ikbar.sayHello("upls"));
// console.log(rusdi.name);
