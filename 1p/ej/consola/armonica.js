// Imprimir series de n números según corresponda
// usar iteraciones de k={1,n}
// leer n, x, desde la consola (8):
// suma armónica

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let resultado = 0;

rl.question('N: ', max => {
    for(let i = 1; i <= max; i++) {
        resultado += (1/i);
    }
    console.log(resultado);
    rl.close();
})
