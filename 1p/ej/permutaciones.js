/* 
    haciendo uso de esta secuencia S=[3,1,4,2,3] listar:
    permutaciones(s)
*/

const secuencia = [3,1,4,2,3];
const permutaciones = [];
// 3,1,4,2,3
// 3,1,4,3,2
// 3,1,2,4,3


function permutar(lista){
    let n = lista.length;
    let result = [];
    if (n<2) {
        result = [...lista];
    } else if (n===2) {
        result = [[lista[0], lista[1]], [lista[1], lista[0]]];
    } else {
        for (let j=0; j<n; j++) {
            let listaMenor = [];
            for (let k=0; k<n; k++){ 
                console.log(`lista[j]: ${lista[j]}. lista[k]: ${lista[k]}`);
                if (k!==j) listaMenor.push(lista[k]);
            }
            let subResult = permutar(listaMenor);
            for (let i=0; i<subResult.length; i++){ 
                let s = [];
                s.push(lista[j]);
                for (let k=0; k<subResult[i].length; k++){ 
                    s.push(subResult[i][k]);
                }
                result.push(s);
            }
        }
    }
    return result;
}

let secuenciaPermutada = permutar(secuencia);

// console.log(secuenciaPermutada);