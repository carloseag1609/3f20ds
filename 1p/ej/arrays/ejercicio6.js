const { genSucesionLucas } = require('../utils/lucas');
const x = 10;

const sucesion = genSucesionLucas(x);
sucesion.forEach(el => console.log(el));