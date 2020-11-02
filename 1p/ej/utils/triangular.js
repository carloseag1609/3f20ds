function genNumerosTriangulares(n = 10) {
  let numerosTriangulares = new Array();
  for (let i = 1; i <= n; i++) {
    numerosTriangulares.push((i * (i + 1)) / 2);
  }
  return numerosTriangulares;
}

module.exports = {
  genNumerosTriangulares
}