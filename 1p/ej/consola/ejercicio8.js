// Imprimir series de n números según corresponda
// usar iteraciones de k={1,n}
// leer n, x, desde la consola (8):
// suma armónica
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Número máximo: ', max => {
    console.log('1 + 1/2');
    for(let i = 2; i <= max; i++) {
        console.log(`+ 1/${i}`);
    }
    rl.close();
})
