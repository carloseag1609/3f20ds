const x = 10;

function genAleatorios(n) {
    n--;
    if (n < 1) return console.log(Math.floor(Math.random() * (10 - 1) + 1));
    if (n === 0) return;
    else {
        console.log(Math.floor(Math.random() * (10 - 1) + 1));
        genAleatorios(n - 1);
    }
}

genAleatorios(1);