// haciendo uso de esta secuencia S=[3,1,4,2,3] encontrar
// existenRepetidos(S)
let secuencia = [3, 1, 4, 2, 3];
let setSecuencia = new Set(secuencia);
let len = 0;

for(item of setSecuencia) {
    len++;
}

if(len < secuencia.length) {
    console.log('Hay repetidos');
} else {
    console.log('No hay repetidos');
}
