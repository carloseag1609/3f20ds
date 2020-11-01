// Imprimir series de n=10 números según corresponda
// usar iteraciones de k={1,n}
// no leer datos, ie usar constantes x=3
const { genFibo } = require('./funciones/fibonacci');
const { genPrimos } = require('./funciones/primos');

// Fibonacci
let fibo = genFibo(10);
// fibo.forEach(el => console.log(el));

// Primos
let primos = genPrimos(10);
primos.forEach(el => console.log(el));