const x = 10;

for(let i = 1; i <= x; i++) {
    let factorial = 1;
    for(let j = i; j >= 1; j--) {
        factorial *= j;
    }
    console.log(`${i}! = ${factorial}`);
}