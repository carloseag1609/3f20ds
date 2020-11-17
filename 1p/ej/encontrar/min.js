// haciendo uso de esta secuencia S=[3,1,4,2,3] encontrar
// min(S)
let secuencia = [3, 1, 4, 2, 3];
let min = secuencia[0];

for (let i = 0; i < secuencia.length; i++) {
    if (secuencia[i] < min) {
        min = secuencia[i]
    }
}

console.log(min);