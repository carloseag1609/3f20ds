/**
 * esImpar
 * @param {number} numero - Número a comprobar
 * Retorna un valor booleano dependiendo si el número es impar o no
 */
function esImpar(numero) {
  if (typeof numero !== 'number') throw new Error('El argumento debe ser un número entero');
  return numero % 2 !== 0 ? true : false;
}

/** 
 * genImpares
 * @param {number} n - Cantidad de números impares a generar
 * Retorna un arreglo con la cantidad de números impares solicitada
 */
function genImpares(n = 10) {
  let impares = new Array();
  let cont = 1;
  while (impares.length < n) {
    if (esImpar(cont)) {
      impares.push(cont);
    }
    cont++;
  }
  return impares;
}

/** 
 * genImpares
 * @param {number} n - Cantidad de números impares a generar
 * Retorna un arreglo con la cantidad de números impares solicitada, intercalando entre positivos y negativos
 */
function genImparesConDiferenteSigno(n) {
  let impares = new Array();
  let cont = 1;
  while (impares.length < n) {
    if (esImpar(cont)) {
      if (esImpar(impares.length)) {
        impares.push(cont);
      } else {
        impares.push(cont * -1);
      }
    }
    cont++;
  }
  return impares;
}

module.exports = {
  genImpares,
  genImparesConDiferenteSigno,
  esImpar
}