// Imprimir series (10) de n=10 números según corresponda
// usar iteraciones de k={1,n}
// no leer datos, ie usar constantes x=3
// Primos

const { esPrimo } = require('../utils/primos');
let i = 0;
let cont = 0;
let max = 10;

while (i < max) {
    if (esPrimo(cont)) {
        console.log(cont);
        i++;
    }
    cont++;
}