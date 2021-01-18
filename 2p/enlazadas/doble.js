const DoublyLinkedList = require('../classes/DoublyLinkedList');

let cities = new DoublyLinkedList();
cities.insert("Colima", "head");
cities.insert("Mérida", "Colima");
cities.insert("Toluca", "Mérida");
cities.insert("Ecatepec", "Toluca");
cities.display();
console.log();
cities.remove("Mérida");
cities.display();