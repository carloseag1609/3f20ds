const { esPrimo } = require("../utils/primos");

let cont  = 0;
let x     = 10;
let i     = 0;

while (i < x) {
  if (esPrimo(cont)) {
    console.log(cont)
  }
  cont++;
}

