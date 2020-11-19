const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let x;

console.log('Programa de números aleatorios');
rl.question('Números aleatorios a generar: ', n => {
    for (let i = 0; i < n; i++) {
        console.log(`${i + 1} -> ${Math.floor(Math.random() * (10 - 1) + 1)}`);
    }
    rl.close();
});

