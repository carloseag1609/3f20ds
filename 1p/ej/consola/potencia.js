// Imprimir series de n números según corresponda
// usar iteraciones de k={1,n}
// leer n, x, desde la consola (8):
// Potencia x elevado a la y
const readline = require('readline');
const {
    getPotencias
} = require('../utils/potencia');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Máximo: ', max => {
    rl.question('Base: ', base => {
        for (let y = 1; y <= max; y++) {
            console.log(`${base}^${y} = ${Math.pow(base, y)}`);
        }
        rl.close();
    })
})