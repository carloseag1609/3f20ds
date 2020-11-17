const {
    esImpar
} = require('../utils/impares');

function genSen(x, sen) {
    let list = new Array(String);
    let cont = 1;
    let i = 1;

    console.log(`sen ${sen}:`);

    while (i <= x) {
        if (esImpar(cont)) {
            if (esImpar(i)) {
                list.push(`+ (${sen}^${cont} / ${cont}!)`)
            } else {
                list.push(`- (${sen}^${cont} / ${cont}!)`);
            }
            i++;
        }
        cont++;
    }

    return list;
}

module.exports = {
    genSen
}