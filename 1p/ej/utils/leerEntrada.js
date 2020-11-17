const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdoutput
});

function leerEntrada(message) {
    console.log(message);
    rl.question(message, respuesta => {
        return new Promise((resolve, reject) => {
            resolve(parseInt(respuesta));
            rl.close();
            // if(respuesta.trim().length == 1) {
            //     reject('Escribe algo');
            // }
        })
    });
}

module.exports = {
    leerEntrada
}