const { factorialArray } = require("../utils/factorial");

const factoriales = factorialArray(10);

factoriales.forEach(function(factorial, i) {
    console.log(`${i}! = ${factorial}`)
});