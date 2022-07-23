// const validator = require("validator");
var chalk = require("chalk"); /* ver 4.1.0 */
// import chalk from "chalk";
// const { default: isEmail } = require("validator/lib/isEmail");

// 1. Validator Email
// console.log(validator.isEmail("ikbar@gmail.com"));

// 2. Validator mobile Phone
// console.log(validator.isMobilePhone("0802345678", "id-ID"));

// 3. Validator Numeric
// console.log(validator.isNumeric("09734762563"));

// 4. Chalk
// untuk mewarnai terminal
// console.log(chalk.blue("hello world"));

// console.log(chalk.bgRed("Hello world!"));
const pesan = chalk`saya suka {bgRed makan} bakso pake tahu dan keju manis`;
console.log(pesan);
