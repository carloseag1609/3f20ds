const Stack = require('../classes/Stack');

function esPalindromo(palabra) {
    palabra = palabra.toLowerCase();
    let stack = new Stack();
    for (let i = 0; i < palabra.length; i++) {
        stack.push(palabra[i]);
    }
    let palabraAlReves = "";
    while (stack.length() > 0) {
        palabraAlReves += stack.pop();
    }
    if (palabra == palabraAlReves) {
        return true;
    }
    return false;
}

let palabra = "Ana";
esPalindromo(palabra) ? console.log(palabra + ' es palíndromo') : console.log(palabra + ' no es palíndromo')

palabra = "Juan"
esPalindromo(palabra) ? console.log(palabra + ' es palíndromo') : console.log(palabra + ' no es palíndromo') 