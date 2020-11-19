// const S = [3, 1, 4, 2, 3];
// let hayRepetidos = false;

// for(let i = 0; i < S.length; i++) {
//     for(let j = i + 1; j < S.length; j++) {
//         if(S[i] === S[j]) {
//             hayRepetidos = true;
//         }
//     }
// }

// hayRepetidos? console.log('Hay repetidos') : console.log('No hay repetidos');


const n = 5;

function factorial(n = 5) {
    if (n == 1) {
        return 1;
    }
    return (n * factorial(n - 1));
}

console.log(factorial(n));