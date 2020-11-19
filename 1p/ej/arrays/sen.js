const { genSen } = require('../utils/sen');
const x = 10;
const sen = 3;

let array = genSen(x, sen);
array.forEach(el => console.log(el));