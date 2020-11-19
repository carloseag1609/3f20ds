// generar 10e4 numeros aleatorios //[0, 9999]
// ¿cuantas inversiones requiere cada uno en promedio?
// ¿cuantas tiempo toma cada uno en promedio?
// ¿podemos mejorar el tiempo de ejecución? ¿cómo?

let inversiones = 0;
let min = 0;
let max = 9999;
let long = 100000;
let numeros = [];

const getRandom = (min, max) => Math.floor((Math.random() * (min + max) + min));

console.time('Llenar arreglo con números aleatorios entre 0 y 9999 tardó');
for (let i = 0; i < long; i++) {
    numeros[i] = getRandom(min, max);
}
console.timeEnd('Llenar arreglo con números aleatorios entre 0 y 9999 tardó');


console.time('Ordenar arreglo tardó: ');
for (let i = 0; i < long; i++) {
    for (let j = 0; j < long - i - 1; j++) {
        if (numeros[j] > numeros[j + 1]) {
            let aux = numeros[j];
            numeros[j] = numeros[j + 1];
            numeros[j + 1] = aux;
            inversiones++;
        }
    }
}
console.timeEnd('Ordenar arreglo tardó: ');


console.log('Inversiones promedio: ' + inversiones);
console.log('¿podemos mejorar el tiempo de ejecución? ¿cómo? R = Sí, optimizando el ordenamiento de tal manera que se reduzca la cantidad de intercambios (ver código comentado)');
console.log(numeros);

// console.time('Ordenar arreglo tardó: ');
// for (let i = 0; i < long; i++) {
//     let ordenado = false;
//     for (let j = 0; j < long - i - 1; j++) {
//         if (ordenado) break;
//         if (numeros[j] > numeros[j + 1]) {
//             let aux = numeros[j];
//             numeros[j] = numeros[j + 1];
//             numeros[j + 1] = aux;
//             inversiones++;
//             ordenado = true;
//         }
//     }
// }
// console.timeEnd('Ordenar arreglo tardó: ');