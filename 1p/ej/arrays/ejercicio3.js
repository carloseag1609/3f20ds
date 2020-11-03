// Generar e imprimir arrays de n=10 números según corresponda
// usar iteraciones de k={1,n}
// no leer datos, ie usar constantes x=3
// Array de números de la sucesión Fibonacci

const {
  genFibo
} = require('../utils/fibonacci');
const x = 10;

let fibo = genFibo(x);
fibo.forEach(el => console.log(el));