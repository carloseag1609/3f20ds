// Generar e imprimir arrays de n=10 números según corresponda
// usar iteraciones de k={1,n}
// no leer datos, ie usar constantes x=3
// Array de elementos de la sucesión de Lucas

const { genSucesionLucas } = require('../utils/lucas');
const x = 10;

const sucesion = genSucesionLucas(x);
sucesion.forEach(el => console.log(el));