class List {
    
    constructor() {
        this.listSize = 0;
        this.pos = 0;
        this.dataStore = [];
    }

    append(element) {
        this.dataStore[this.listSize++] = element;
    }

    // Returns the index of the specified element 
    find(element) {
        for(let i = 0; i < this.dataStore.length; ++i) {
            if(this.dataStore[i] === element) {
                return i;
            }
        }
        return -1;
    }

    remove(element) {
        let foundAt = this.find(element);
        if(foundAt > -1) {
            this.dataStore.splice(foundAt, 1); // splice modifies the array, slice does not
            --this.listSize;
            return true
        } 
        return false;
    }

    insert(element, after) {
        let insertPos = this.find(after);
        if(insertPos > -1) {
            this.dataStore.splice(insertPos + 1, 0, element); // starts at insertPos + 1, don't remove elements but add the element received in the params
            ++this.listSize;
            return true;
        }
        return false;
    }

    contains(element) {
        for(let i = 0; i < this.dataStore.length; ++i) {
            if(this.dataStore[i] === element) {
                return true;
            }
            return false;
        }
    }

    clear() {
        delete this.dataStore;
        this.dataStore = [];
        this.listSize = 0; 
        this.pos = 0;
    }

    length() {
        return this.listSize;
    }

    toString() {
        return this.dataStore;
    }

    front() {
        this.pos = 0;
    }

    end() {
        this.pos = this.listSize - 1;
    }

    prev() {
        if(this.pos > 0) {
            --this.pos;
        }
    }

    next() {
        if(this.pos < this.listSize - 1) {
            ++this.pos;
        }
    }

    currPos() {
        return this.pos;
    }

    moveTo(position) {
        this.pos = position;
    }

    getElement() {
        return this.dataStore[this.pos];
    }

}

let names = new List();

names.append('Carlos');
names.append('Miguel');
names.append('Barbara');

for(names.front(); names.currPos() < names.length(); names.next()) {
    console.log(names.getElement());
}