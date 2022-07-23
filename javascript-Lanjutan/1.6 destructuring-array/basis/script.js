// Destructuring Array
// array menganut urutan index dimulai dari 0

//                      0        1        2        3
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

const [firstFood, secondFood, thirdFood, fourthFood] = favorites;

//* Ketika ingin mengambil nilai ketiga dari array
// const [, , thirdFood ] = favorites;

console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);
