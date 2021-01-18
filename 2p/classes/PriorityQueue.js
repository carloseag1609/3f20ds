class PriorityQueue {

    constructor() {
        this.data = [];
    }

    enqueue(element) {
        this.data.push(element);
    }

    dequeue() {
        let priority = this.data[0].code;
        for (let i = 1; i < this.data.length; ++i) {
            if (this.data[i].code < priority) {
                priority = i;
            }
        }
        return this.data.splice(priority, 1);
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
            retStr += this.data[i].name + " code: "
                + this.data[i].code + "\n";
        }
        return retStr;
    }

    empty() {
        return this.data.length == 0;
    }



}

module.exports = PriorityQueue;