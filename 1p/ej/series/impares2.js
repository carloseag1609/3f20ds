const {
  esImpar
} = require("../utils/impares");

let cont = 0;
let x = 10;
let i = 1;

while (i <= x) {
  if (esImpar(cont)) {
    if (esImpar(i)) {
      console.log(cont);
    } else {
      console.log(cont * -1);
    }
    i++;
  }
  cont++;
}
