// Imprimir series de n=10 números según corresponda
// usar iteraciones de k={1,n}
// no leer datos, ie usar constantes x=3

const {
  genPrimos
} = require('../utils/primos');
const x = 10;

let primos = genPrimos(x);
primos.forEach(el => console.log(el));