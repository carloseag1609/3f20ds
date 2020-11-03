// Generar e imprimir arrays de n=10 números según corresponda
// usar iteraciones de k={1,n}
// no leer datos, ie usar constantes x=3
// Array de números triangulares

const {
  genNumerosTriangulares
} = require('../utils/triangular');
const x = 10;

const triangulares = genNumerosTriangulares(x);
triangulares.forEach(el => console.log(el));
