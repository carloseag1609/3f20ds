function genRandom(min = 1, max = 10) {
  return Math.random() * (max - min) + min;
}

function genNumerosAleatorios(n = 10, min = 1, max = 10) {
  const aleatorios = new Array();
  for(let i = 0; i < 10; i++) {
    aleatorios.push(Math.floor(genRandom()));
  }
  return aleatorios;
}

module.exports = {
  genNumerosAleatorios,
  genRandom
}