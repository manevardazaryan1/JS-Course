// SingleLinkedList implementation.

export class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

export class SingleLinkedList{
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(node) {
        if (!this.head)
            this.head = node;
        else {
            let current = this.head;

            while (current.next) {
                current = current.next
            }

            current.next = node;
        }

        this.size += 1;

        return this;
    }

    prepend(node) {
        const firstNode = this.head;
        this.head = node;
        this.head.next = firstNode;

        this.size += 1;

        return this;
    }

    pop(){
        if (!this.size)
            return false;

        let current = this.head;
        
        for (let idx = 0; idx < this.size - 2; ++idx)
            current = current.next;
        
        const removed = current.next;
        current.next = null;
        this.size -= 1;

        return removed;
    }

    insert(node, index) {
        if (index >= this.size)
            return false
        
        const current = this.head;

        for (let idx = 0; idx < index - 1; ++idx)
            current = current.next;

        node.next = current.next;
        current.next = node;

        this.size += 1;

        return this;
    }

    removeAt(index) {
        if (index >= this.size)
            return false;

        const current = this.head;

        for (let idx = 0; idx < index - 1; ++idx)
            current = current.next;
        
        const removed = current.next;
        removed.next = null;

        if (current.next.next)
            current.next = current.next.next;
        else
            current.next = null;

        this.size -= 1;

        return removed;
    }

    remove(value) {
        if (!this.size)
            return false;

        let current = this.head;
        if (current.value === value){
            this.head = current.next;
            current.next = null;

            return current;
        }

        while (current.next) {
            if (current.next.value === value) {
                const removed = current.next;
                removed.next = null;

                if (current.next.next){
                    current.next = current.next.nxet;
                } else {
                    current.next = null;
                }

                this.size -= 1;

                return removed;
            }

            current = current.next;
        }

        return false;
    }

    getSize() {
        return this.size;
    }

    isEmpty() {
        return !this.size;
    }

    printList() {
        let current = this.head;
        const nodesArray = [];

        while (current) {
            nodesArray.push(current);
            current = current.next;
        }

        return nodesArray;
    }
}
