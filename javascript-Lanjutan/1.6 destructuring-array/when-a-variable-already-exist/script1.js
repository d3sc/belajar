// ketika variable sudah ada

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

let myFood = "Ice Cream";
let herFood = "Noodles";

// Tidak perlu menggunakan tanda kurung buka dan kurung tutup seperti destructuring object.
[myFood, herFood] = favorites;

console.log(myFood);
console.log(herFood);

/* output:
Seafood
Salad
*/
