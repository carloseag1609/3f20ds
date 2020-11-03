const { genNumerosAleatorios } = require("../utils/aleatorios");
const min = 1;
const max = 10;
const x   = 10;

const numeros = genNumerosAleatorios(x, min, max);
numeros.forEach(el => console.log(el));