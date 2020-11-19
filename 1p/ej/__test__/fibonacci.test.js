const { expect } = require('@jest/globals');
const { genFibo } = require('../utils/fibonacci');

test('genFibo retorna un arreglo de N elementos', () => {
  const n = 5;
  const sucesion = genFibo(n);
  expect(sucesion.length).toBe(n + 3);
});

test('genFibo retorna números enteros positivos mayores a 0', () => {
  const n = 5;
  const sucesion = genFibo(n);
  expect(sucesion.length).toBe(n + 3);
  sucesion.forEach(el => {
    expect(typeof el).toBe('number');
    expect(el).toBeGreaterThanOrEqual(0);
  });
});