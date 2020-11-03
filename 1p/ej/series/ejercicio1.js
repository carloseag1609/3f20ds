const {
  esImpar
} = require("../utils/impares");

let cont = 0;
let x = 10;
let i = 0;

while (i < x) {
  if (esImpar(cont)) {
    console.log(cont)
    i++
  }
  cont++;
} /*  */