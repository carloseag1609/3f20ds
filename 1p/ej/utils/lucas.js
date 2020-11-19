function genSucesionLucas(n = 10) {
  let numeros = new Array();
  let a = 0;
  let b = 0;
  let c = 0;
  numeros.push(2);
  numeros.push(1);
  for(let i = 2; i < n; i++) {
    a = numeros[i - 1];
    b = numeros[i - 2];
    c = a + b;
    numeros.push(c); 
  }
  return numeros;
}

function getNumeroLucas(n = 5) {
  const numeros = genSucesionLucas(n);
  return numeros[n - 1];
}

module.exports = {
  genSucesionLucas, getNumeroLucas
}