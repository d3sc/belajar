const profile = {
  firstName: "John",
  lastName: "Doe",
  age: 18,
};

// membuat var lalu memasukan nilai
let firstName = "Dimas";
let age = 20;

// menginisialisasi nilai baru melalui destructuring object
// menimpa var yang sudah di deklarasi di atas dengan property object profile
// jika ingin menggunakan destructuring object harus menggunakan kurung tutup dan buka
({ firstName, age } = profile);

console.log(firstName);
console.log(age);

/* output:
John
18
*/
