function getPotencias(base, limite) {
    let elementos = [];

    for (let i = 1; i <= limite; i++) {
        elementos.push(Math.pow(base, i));
    }

    return elementos;
}

module.exports = {
    getPotencias
}