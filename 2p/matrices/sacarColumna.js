const Matriz = require('../classes/Matriz');
const matriz = new Matriz(4, 4);

// Llenar la matriz con números aleatorios
matriz.llenar();

console.log('Normal: ');
console.log(matriz.mostrar())

// Sacar la segunda columna de la matriz
console.log('Segunda columna: ');
console.log(matriz.sacarColumna(2));