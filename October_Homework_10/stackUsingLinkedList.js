// Stack implementation.

import { Node, SingleLinkedList } from './singleLinkedList.js';


// Using Linked List.


class Stack {
    constructor(){
        this.top = null;
        this.storage = new SingleLinkedList();
    }

    push(data) {
        this.storage.append(new Node(data));

        if (!this.top)
            this.top = this.storage.head;

        return this;
    }

    pop() {
        return this.storage.pop();
    }

    pree() {
        return this.top;
    }

    isEmpty() {
        return this.storage.isEmpty();
    }

    getSize() {
        return this.storage.getSize();
    }
}
