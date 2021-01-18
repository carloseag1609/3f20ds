class Stack {
    constructor() {
        this.data = [];
        this.top = 0;
    }

    push(element) {
        this.data[this.top++] = element;
    }

    pop() {
        return this.data[--this.top];
    }

    length() {
        return this.top;
    }

    clear() {
        this.top = 0;
    }

}

module.exports = Stack;