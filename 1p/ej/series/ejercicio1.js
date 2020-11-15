// Generar e imprimir series de n=10 números según corresponda
// usar iteraciones de k={1,n}
// no leer datos, ie usar constantes x=3
// Serie de numeros impares

const {
  esImpar
} = require("../utils/impares");

let cont = 0;
let x = 10;
let i = 1;

while (i <= x) {
  if (esImpar(cont)) {
    console.log(cont)
    i++;
  }
  cont++;
} 
