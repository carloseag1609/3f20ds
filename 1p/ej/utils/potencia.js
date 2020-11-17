function getPotencias(base, exponente, limite) {
    let elementos = [];

    for (exponente = 1; exponente <= limite; exponente++) {
        elementos.push(Math.pow(base, exponente));
    }

    return elementos;
}

module.exports = {
    getPotencias
}