/** 
 *   esPrimo
 *   @param {number} n - Número a comprobar si es primo 
 *   Retorna true si el número es primo, y false si no lo es
 */
function esPrimo(n) {
    if (n == 0 || n == 1 || n == 4) return false;
    for (let x = 2; x < n / 2; x++) {
        if (n % x == 0) return false;
    }
    return true;
}


/** 
 *   genPrimos
 *   @param {number} n - Cantidad de números a generar 
 *   Retorna un arreglo con los primeros N números primos
 */
function genPrimos(n = 10) {
    let numerosPrimos = new Array();
    let cont = 0;
    while(numerosPrimos.length < n) {
        if(esPrimo(cont)) {
            numerosPrimos.push(cont);
        }
        cont++;
    }
    return numerosPrimos;
}

module.exports = {
    genPrimos,
    esPrimo
}