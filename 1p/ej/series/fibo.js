// Generar e imprimir series de n=10 números según corresponda
// usar iteraciones de k={1,n}
// no leer datos, ie usar constantes x=3
// Serie de Fibonacci

const x = 10;
let a = 0;
let b = 1;
let c = a + b;

console.log(a);
console.log(b);
console.log(c);

for (let i = 0; i < x; i++) {
  a = b;
  b = c;
  c = a + b;
  console.log(c);
}