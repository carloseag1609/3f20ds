class Stack {
    constructor() {
        this.dataStore = [];
        this.top = 0;
    }

    push(element) {
        this.dataStore[this.top++] = element;
    }

    pop() {
        return this.dataStore[--this.top];
    }

    length() {
        return this.top;
    }

    clear() {
        this.top = 0;
    }

}

module.exports = Stack;