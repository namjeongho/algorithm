class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.php(item);
    }

    peek() {
        return this.items[this.items.length-1];
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