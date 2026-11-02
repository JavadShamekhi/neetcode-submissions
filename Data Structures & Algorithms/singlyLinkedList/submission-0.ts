class LinkedList {
    private head: Node | null;

    constructor() {
        this.head = null;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        let current = this.head;
        let i = 0;

        while (current !== null) {
            if (i === index) {
                return current.val;
            }

            current = current.next;
            i++;
        }

        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val: number): void {
        const newNode = new Node(val);

        newNode.next = this.head;
        this.head = newNode;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val: number): void {
        const newNode = new Node(val);

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let current = this.head;

        while (current.next !== null) {
            current = current.next;
        }

        current.next = newNode;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index: number): boolean {
        if (this.head === null) {
            return false;
        }

        if (index === 0) {
            this.head = this.head.next;
            return true;
        }

        let current = this.head;
        let i = 0;

        while (current.next !== null) {
            if (i + 1 === index) {
                current.next = current.next.next;
                return true;
            }

            current = current.next;
            i++;
        }

        return false;
    }

    /**
     * @return {number[]}
     */
    getValues(): number[] {
        const result: number[] = [];
        let current = this.head;

        while (current !== null) {
            result.push(current.val);
            current = current.next;
        }

        return result;
    }
}

class Node {
    val: number;
    next: Node | null;

    constructor(val: number) {
        this.val = val;
        this.next = null;
    }
}