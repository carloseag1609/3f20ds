// Imprimir series (10) de n=10 números según corresponda
// usar iteraciones de k={1,n}
// no leer datos, ie usar constantes x=3
// Potencia X elevado a la Y (tabla)

const x = 2;
const max = 10;

for(let y = 1; y <= max; y++) {
    console.log(`${x}^${y} = ${Math.pow(x, y)}`);
}