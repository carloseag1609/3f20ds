let x = 10;

function fibonacci(n) {
    if(n === 0) return 1;
    if(n === 1) return 1;
    if(n === 2) return 2;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

for(let i = 1; i <= x; i++) {
    console.log(fibonacci(i));
}  