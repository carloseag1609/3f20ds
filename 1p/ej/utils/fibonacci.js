/** 
 *   genFibo
 *   @param {number} n - Límite de la sucesión 
 *   Retorna un arreglo con los primeros n elementos de la sucesión de fibonacci
 */
function genFibo(n = 10) {
    let fiboArray = [];
    let a = 0;
    let b = 1;
    let c = a + b;
    fiboArray.push(a);
    fiboArray.push(b);
    fiboArray.push(c);
    for(let i = 0; i < n; i++) {
        a = b;
        b = c;
        c = a + b;
        fiboArray.push(c);
    }
    return fiboArray;
}

module.exports = {
    genFibo
}
