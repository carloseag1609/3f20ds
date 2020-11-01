const { expect } = require('@jest/globals');
const { describe } = require('yargs');
const { genFibo } = require('../utils/fibonacci');

test('genFibo retorna un arreglo de N elementos', () => {
  const n = 5;
  const sucesion = genFibo(n);
  expect(sucesion.length).toBe(n + 3);
  sucesion.map(el => expect(typeof el).toBe('number'));
});

test('genFibo retorna números enteros positivos mayores a 0', () => {
  const n = 5;
  const sucesion = genFibo(n);
  expect(sucesion.length).toBe(n + 3);
  sucesion.map(el => {
    expect(typeof el).toBe('number');
    expect(el).toBeGreaterThanOrEqual(0);
  });
});
