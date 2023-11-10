interface LinkedList<T> {
    get length(): number;
    insertAt(item: T, index: number): void;
    remove(item: T): T | undefined;
    removeAt(index: number): T | undefined;
    append(item: T): void;
    prepend(item: T): void;
    get(index: number): T | undefined;
}

type Node<T> = {
    value: T;
    prev?: Node<T>;
    next?: Node<T>;
};

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    private debug(from?: string) {
        let current = this.head;
        let value = "";
        for (let i = 0; current && i < this.length; ++i) {
            value += `${i} => ${current.value} `;
            current = current.next;
        }
        console.log(from);
        console.log(value);
    }

    get(index: number) {
        return this.getAt(index)?.value;
    }

    prepend(item: T) {
        this.length++;
        const node = { value: item } as Node<T>;

        if (!this.head) {
            this.head = this.tail = node;
            return;
        }

        node.next = this.head;
        this.head.prev = node;

        this.head = node;
    }

    append(item: T) {
        this.length++;
        const node = { value: item } as Node<T>;

        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }

        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
        this.debug("append");
    }

    insertAt(item: T, index: number) {
        if (index > this.length) {
            throw new Error("oh no");
        } else if (index === this.length) {
            this.append(item);
            return;
        } else if (index === 0) {
            this.prepend(item);
            return;
        }

        this.length++;
        let current = this.getAt(index);
        const node = { value: item } as Node<T>;

        node.next = current;
        node.prev = current.prev;
        current.prev = node;

        if (node.prev) {
            node.prev.next = current;
        }
    }

    remove(item: T) {
        let current = this.head;
        for (let i = 0; current && i < this.length; ++i) {
            if (current.value === item) {
                break;
            }
            current = current.next;
        }

        if (!current) {
            return;
        }

        return this.removeNode(current);
    }

    removeAt(index: number) {
        const node = this.getAt(index);

        if (!node) {
            return;
        }

        return this.removeNode(node);
    }

    private removeNode(node: Node<T>) {
        this.length--;
        if (this.length === 0) {
            const value = this.head?.value;
            this.head = this.tail = undefined;

            return value;
        }

        if (node.prev) {
            node.prev.next = node.next;
        }

        if (node.next) {
            node.next.prev = node.prev;
        }

        if (node === this.head) {
            this.head = node.next;
        }

        if (node === this.tail) {
            this.tail = node.prev;
        }
        this.debug("removeNode");

        node.prev = node.next = undefined;
        return node.value;
    }

    private getAt(index: number) {
        let current = this.head as Node<T>;

        for (let i = 0; current && i < index; ++i) {
            current = current.next as Node<T>;
        }
        return current;
    }
}
