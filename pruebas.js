let cantidadPrimos = 10; // cuántos primos
let primosEncontrados = 0; // variable para eso
let i = 1; // variable pal ciclo

function primo(numero) {

    for (var i = 2; i < numero; i++) {

        if (numero % i === 0) {
            return false;
        }

    }

    return numero !== 1;
}

while(primosEncontrados <= cantidadPrimos) {
    if(primo(i)) {
        console.log(i);
        primosEncontrados++;
    }
    i++;
}
