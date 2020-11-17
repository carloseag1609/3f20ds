// haciendo uso de esta secuencia S=[3,1,4,2,3] encontrar
// existenRepetidos(S)
let secuencia = [3, 1, 4, 2, 3];
let repetidos = false;

const secuenciaFiltrada = secuencia.filter(function(el, index) {
    return secuencia.indexOf(el) === index;
})

if(secuenciaFiltrada.length !== secuencia.length) {
    console.log('Hay repetidos')
} else {
    console.log('No hay repetidos')
}