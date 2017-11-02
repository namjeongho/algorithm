class Queue {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.shift();
    }

    peek() {
        return this.items[0];
    }

    size() {
        return this.items.length;
    }

    empty() {
        return !this.items.length;
    }

    clear() {
        this.items = [];
    }
}