// Generar e imprimir arrays de n=10 números según corresponda
// usar iteraciones de k={1,n}
// no leer datos, ie usar constantes x=3
// Array de números impares

const { genImpares } = require('../utils/impares');
const x = 10;

const impares = genImpares(x);
impares.forEach(el => console.log(el));
