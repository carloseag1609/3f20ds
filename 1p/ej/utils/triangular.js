function genNumerosTriangulares(n = 10) {
  let numerosTriangulares = new Array();
  for (let i = 1; i <= n; i++) {
    numerosTriangulares.push((i * (i + 1)) / 2);
  }
  return numerosTriangulares;
}

function getTriangular(n = 5) {
  const triangulares = genNumerosTriangulares(n);
  return triangulares[n - 1];
}

module.exports = {
  genNumerosTriangulares, getTriangular
}