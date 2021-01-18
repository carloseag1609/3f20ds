const CircularLinkedList = require('../classes/CircularLinkedList');

let cities = new CircularLinkedList();
cities.insert('Colima', 'head'); // Se inserta como nodo HEAD
cities.insert('Tepames', 'Colima');
cities.insert('Ixtlahuacán', 'Tepames');
cities.insert('Tecomán', 'Ixtlahuacán');
cities.display();