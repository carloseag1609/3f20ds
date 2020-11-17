// Imprimir series (10) de n=10 números según corresponda
// usar iteraciones de k={1,n}
// no leer datos, ie usar constantes x=3
// sen x = x - x ^ 3 / 3!+...-

const { esImpar } = require('../utils/impares');
const x = 10;
let cont = 1;
let i = 1;
let sen = 3;

console.log(`sen ${sen}:`);

while(i <= x) {
    if(esImpar(cont)) {
        if(esImpar(i)) {
            console.log(`+ (${sen}^${cont} / ${cont}!)`);
        } else {
            console.log(`- (${sen}^${cont} / ${cont}!)`);
        }
        i++;
    }
    cont++;
}