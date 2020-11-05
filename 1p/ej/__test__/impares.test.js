const {
  genImpares,
  esImpar
} = require("../utils/impares");
const {
  expect
} = require('@jest/globals');

test('genImpares debe retornar un arreglo de N elementos', () => {
  const n = 10;
  const impares = genImpares(n);
  expect(impares.length).toBe(n);
});

test('genImpares debe retornar únicamente números enteros positivos', () => {
  const n = 10;
  const impares = genImpares(n);
  impares.forEach(el => {
    expect(typeof el).toBe('number');
    expect(el).toBeGreaterThanOrEqual(1);
  })
});

test('genImpares debe retornar únicamente números impares', () => {
  const n = 10;
  const impares = genImpares(n);
  impares.forEach(el => {
    expect(esImpar(el)).toBe(true);
  })
});

test('esImpar retorna un valor booleano', () => {
  const valor = esImpar(10);
  expect(typeof valor).toBe('boolean');
});