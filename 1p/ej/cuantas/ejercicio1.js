// cuantas(4), no leer datos, ie usar constantes r = 3
// De un alfabeto de 8 símbolos cuantas palabras de 8 símbolos podemos generar ?

const {
    factorial
} = require('../utils/factorial');
const nSimbolos = 8;
let result = factorial(nSimbolos);

console.log(`Se pueden formar ${result} palabras`);
