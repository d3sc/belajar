// Destructuring object

const profile = {
  firstName: "John",
  lastName: "Doe",
  age: 18,
};

// 1. memasukkan property object kedalam var
// memasukkan property pada object profile ke dalam variable
// const { firstName, lastName, age } = profile;

// memanggil var yang didalamnya terdapat property dari object profile.
// console.log(firstName, lastName, age);

// 2. membuat var dalam destructuring object
// memasukkan property object profile ke dalam local variable.
const { firstName: localFirstName, lastName: localLastName, age: localAge } = profile;

// Memanggil local variable yang sudah di deklarasikan
console.log(localFirstName);
console.log(localLastName);
console.log(localAge);
