let numeros = [3, 1, 4, 2, 3];

let menor = numeros[0];

numeros.forEach(numero => {
    if(numero < menor) {
        menor = numero
    }
});

console.log(menor);