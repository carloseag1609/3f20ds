// De un alfabeto de n símbolos cuantas palabras de r símbolos podemos generar ? , r <= n
const n = 10;
const r = 5;
let result = 1;

for(let i = n; i >= r; i--) {
    result *= i;
}

console.log(result);