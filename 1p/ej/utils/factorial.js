function factorial(n = 5) {
    if(n == 1) {
        return 1;
    }
    return (n * factorial(n - 1));
}

function factorialArray(n) {
    let list = [];
    for (let i = 1; i <= n; i++) {
        let factorial = 1;
        for (let j = i; j >= 1; j--) {
            factorial *= j;
        }
        list.push(factorial);
    }
    return list;
}

module.exports = {
    factorial, factorialArray
}