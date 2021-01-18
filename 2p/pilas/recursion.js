const Stack = require("../classes/Stack");

function factorial(n) {
    let stack = new Stack();
    while (n > 1) {
        stack.push(n--);
    }
    let resultado = 1;
    while (stack.length() > 0) {
        resultado *= stack.pop();
    }
    return resultado;
}

console.log(factorial(5))