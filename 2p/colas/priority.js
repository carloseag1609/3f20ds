const Patient = require('../classes/Patient');
const PriorityQueue = require('../classes/PriorityQueue');

let p = new Patient("Smith", 5);
let ed = new PriorityQueue();
ed.enqueue(p);
p = new Patient("Jones", 4);
ed.enqueue(p);
p = new Patient("Fehrenbach", 6);
ed.enqueue(p);
p = new Patient("Brown", 1);
ed.enqueue(p);
p = new Patient("Ingram", 1);
ed.enqueue(p);
let seen = ed.dequeue();
console.log("Paciente actual: " + seen[0].name);
console.log("Pacientes en espera: ")
console.log(ed.toString());