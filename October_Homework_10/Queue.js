// Queue implementation.


class Queue{
    constructor(){
        this.storage = [];
    }

    enqueue(data) {
        this.storage.push(data);

        return this;
    }

    dequeue() {
        return this.storage.unshift();
    }

    front() {
        return this.storage[0];
    }

    isEmpty() {
        return !this.storage.size;
    }

    size() {
        return this.storage.length;
    }

}