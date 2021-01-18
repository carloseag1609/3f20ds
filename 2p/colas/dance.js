const Dancer = require('../classes/Dancer');
const Queue = require('../classes/Queue');

function dance(hombres, mujeres) {
    console.log("Los bailarines son: \n");
    while (!hombres.empty() && !mujeres.empty()) {
        let mujer = mujeres.dequeue();
        console.log("Bailarina: " + mujer.name + "\n");
        let hombre = hombres.dequeue();
        console.log("Bailarín: " + hombre.name + "\n");
    }
}

let hombres = new Queue();
hombres.enqueue(new Dancer("Carlos", "M"));
hombres.enqueue(new Dancer("Enrique", "M"));

let mujeres = new Queue();
mujeres.enqueue(new Dancer("Roberta", "F"));

dance(hombres, mujeres);

if (!mujeres.empty()) {
    console.log(mujeres.front().name + " está en espera para bailar.");
}
if (!hombres.empty()) {
    console.log(hombres.front().name + " está en espera para bailar.");
}