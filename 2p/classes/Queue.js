class Queue {

    constructor() {
        this.data = [];
    }

    enqueue(element) {
        this.data.push(element);
    }

    dequeue() {
        return this.data.shift();
    }

    front() {
        return this.data[0];
    }

    back() {
        return this.data[this.data.length - 1];
    }

    toString() {
        let retStr = "";
        for (let i = 0; i < this.data.length; ++i) {
            retStr += this.data[i] + "\n";
        }
        return retStr;
    }

    empty() {
        return this.data.length == 0;
    }



}

module.exports = Queue;