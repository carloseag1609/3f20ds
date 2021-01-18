const LinkedList = require('../classes/LinkedList');

let cities = new LinkedList();
cities.insert('Conway', "head"); // Se inserta como nodo HEAD
cities.insert('Russelville', 'Conway');
cities.insert('Alma', 'Russelville');
cities.display();