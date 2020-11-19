const { genPrimos, esPrimo } = require('../utils/primos');
const { expect } = require('@jest/globals');

test('genPrimos debe retornar numeros enteros positivos', () => {
  const n = 10;
  const primos = genPrimos(n);
  primos.forEach(el => {
    expect(typeof el).toBe('number');
    expect(el).toBeGreaterThanOrEqual(1); 
  });
});

test('genPrimos debe retornar un array de N elementos', () => {
  const n = 10;
  const primos = genPrimos(n);
  expect(primos.length).toBe(n);
});

test('genPrimos debe retornar numeros primos', () => {
  const n = 10;
  const primos = genPrimos(n);
  primos.forEach(el => {
    expect(esPrimo(el)).toBe(true);
  })
});
