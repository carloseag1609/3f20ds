// Generar e imprimir arrays de n=10 números según corresponda
// usar iteraciones de k={1,n}
// no leer datos, ie usar constantes x=3
// Array de números aleatorios

const { genNumerosAleatorios } = require("../utils/aleatorios");
const min = 1;
const max = 10;
const x   = 10;

const numeros = genNumerosAleatorios(x, min, max);
numeros.forEach(el => console.log(el));