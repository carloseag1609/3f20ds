/** 
 *   genFibo
 *   @param {number} n - Límite de la sucesión 
 *   Retorna un arreglo con los primeros n elementos de la sucesión de fibonacci
 */
function genFibo(n = 10) {
    let numArray = [];
    let a = 0;
    let b = 1;
    let c = a + b;
    numArray.push(a);
    numArray.push(b);
    numArray.push(c);
    for(let i = 0; i < n; i++) {
        a = b;
        b = c;
        c = a + b;
        numArray.push(c);
        // numArray.push(c.toString()); // makes the test fail
    }
    return numArray;
}

module.exports = {
    genFibo
}
