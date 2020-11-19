// haciendo uso de esta secuencia S=[3,1,4,2,3] listar (3):
// no leer datos, ie usar constantes n=5, r=2
// considerar dos números 3, elementos diferentes, por ejemplo cambiar a 31,32
// potencia(S)//powerSet

const S = [3, 1, 4, 2, 3];

function potencia(list = [3, 1, 4, 2, 3]) {
    return list.reduce((a, b) => a.concat(a.map(c => [b].concat(c))), [[]]);
}

console.log(potencia(S));
console.log("O(2^n)");