// haciendo uso de esta secuencia S=[3,1,4,2,3] encontrar
// avg(S)
let secuencia = [3, 1, 4, 2, 3];
let total = 0;

for (let i = 0; i < secuencia.length; i++) {
    total += secuencia[i];
}

console.log(total / secuencia.length);