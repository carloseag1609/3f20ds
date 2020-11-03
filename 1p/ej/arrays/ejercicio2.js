// Generar e imprimir arrays de n=10 números según corresponda
// usar iteraciones de k={1,n}
// no leer datos, ie usar constantes x=3
// Array de números impares con diferente signo

const {
  genImparesConDiferenteSigno
} = require('../utils/impares');
const x = 10;

const imparesConDiferenteSigno = genImparesConDiferenteSigno(x);
imparesConDiferenteSigno.forEach(el => console.log(el));