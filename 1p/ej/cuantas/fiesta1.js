// En una fiesta hay 3 invitados, si cada uno saluda a todos los demás, cuantos saludos ocurrieron ?
const { factorial } = require('../utils/factorial')
const invitados = 3;
let saludos = 0;

saludos = factorial(invitados);

console.log(saludos);