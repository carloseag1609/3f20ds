const Stack = require('../classes/Stack');

function convertToBase(num, base) {
    let stack = new Stack();
    do {
        stack.push(num % base);
        num = Math.floor(num /= base);
    } while (num > 0);
    let result = "";
    while (stack.length() > 0) {
        result += stack.pop();
    }
    return result;
}

let num = 32;
let base = 2;
let converted = convertToBase(num, base);
console.log(num + " en base " + base + " es " + converted);