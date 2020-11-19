// cuantas(4), no leer datos, ie usar constantes r = 3
// En una fiesta hay n invitados, si cada uno saluda a todos los demás, cuantos saludos ocurrieron ?

const { factorial } = require('../utils/factorial');
const n = 10;
let r = 2;
let result = factorial(n) / (factorial(r) * factorial(n - r));

console.log(`Se dieron ${result} saludos`);