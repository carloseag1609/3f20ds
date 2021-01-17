const Matriz = require("./classes/Matriz");

let obj = new Matriz(3, 3);

obj.llenar();

console.log('Inicial: ');
obj.mostrar();

console.log('Sin primera fila: ');
obj.sacarFila(2);
obj.mostrar();