/* 
*   genPrimos
*
*/
function genPrimos(n) {
    let primosArray = [];
    let esPrimo = false;
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j >= n; j++) {
            if(i % j) 
                esPrimo = false;
            else 
                primosArray.push(i)
        }
        esPrimo = false;
    }
    return primosArray;
}

module.exports = {
    genPrimos
}