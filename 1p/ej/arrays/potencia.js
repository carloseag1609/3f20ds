// Generar e imprimir arrays de n=10 números según corresponda
// usar iteraciones de k={1,n}
// no leer datos, ie usar constantes x=3
// potencia x elevado a la k


const {
    getPotencias
} = require("../utils/potencia");

const base = 2;
const n = 10;

const potencias = getPotencias(base, n);
potencias.forEach((el, index) => console.log(`${base}^${index + 1} = ${el}`));