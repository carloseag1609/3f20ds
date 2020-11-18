// Imprimir series de n números según corresponda
// usar iteraciones de k={1,n}
// leer n, x, desde la consola (8):
// primos
const readline = require('readline');
const { esPrimo } = require('../utils/primos');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let i = 0;
let cont = 0;

rl.question('Cantidad de números primos: ', cantidad => {
    while (i < cantidad) {
        if (esPrimo(cont)) {
            console.log(cont);
            i++;
        }
        cont++;
    }
    rl.close();
})