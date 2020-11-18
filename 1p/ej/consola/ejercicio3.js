// Imprimir series de n números según corresponda
// usar iteraciones de k={1,n}
// leer n, x, desde la consola (8):
// Factorial
const readline = require('readline');
const { factorialArray } = require('../utils/factorial');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Máximo: ', maximo => {
    for (let i = 1; i <= maximo; i++) {
        let factorial = 1;
        for (let j = i; j >= 1; j--) {
            factorial *= j;
        }
        console.log(`${i}! = ${factorial}`);
    }
    rl.close();
})