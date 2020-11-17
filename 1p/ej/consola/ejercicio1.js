const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdoutput
});

let x;

console.log('Programa de números aleatorios');
console.log('Números aleatorios a generar: ');
rl.question('', respuesta => {
    x = respuesta;
    for (let i = 0; i < x; i++) {
        console.log(`${i + 1} -> ${Math.floor(Math.random() * (10 - 1) + 1)}`);
    }
    rl.close();
});

