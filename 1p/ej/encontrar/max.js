// haciendo uso de esta secuencia S=[3,1,4,2,3] encontrar
// max(S)
let secuencia = [3, 1, 4, 2, 3];
let max = secuencia[0];

for(let i = 0; i < secuencia.length; i++) {
    if(secuencia[i] > max) {
        max = secuencia[i]
    }
}

console.log(max);