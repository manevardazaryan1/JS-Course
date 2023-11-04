// Stack implementation.

// Using Array.

class Stack {
    constructor(){
        this.storage = [];
    }

    push(data) {
        this.storage.push(data);

        return this;
    }

    pop() {
        return this.storage.pop();
    }

    top() {
        return this.storage[0];
    }

    isEmpty() {
        return !this.storage.length;
    }

    getSize() {
        return this.storage.length;
    }
}
