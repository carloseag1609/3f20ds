const Node = require('./Node');

class LinkedList {

    constructor() {
        this.head = new Node("head");
    }

    find(search) {
        let currentNode = this.head;
        while(currentNode.element !== search) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    findPrevious(item) {
        let currentNode = this.head;
        while (currentNode.next  && currentNode.next.element != item) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    insert(newElement, item) {
        let newNode = new Node(newElement); // new Node("Cookies");
        let currentNode = this.find(item); // 'Eggs' node
        newNode.next = currentNode.next;
        currentNode.next = newNode;
    }

    remove() {
        let previousNode = this.findPrevious(item);
        if (!(previousNode.next == null)) {
            previousNode.next = previousNode.next.next;
        }
    }

    display() {
        let currentNode = this.head;
        while(currentNode.next) {
            console.log(currentNode.next.element);
            currentNode = currentNode.next;
        }
    }

}

module.exports = LinkedList;