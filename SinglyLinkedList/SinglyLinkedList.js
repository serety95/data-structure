class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    insert(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    delete(key) {
        if (!this.head) return;
        if (this.head.data === key) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while (current.next && current.next.data !== key) {
            current = current.next;
        }
        if (current.next) {
            current.next = current.next.next;
        }
    }

    display() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.data + ' -> ';
            current = current.next;
        }
        console.log(result + 'None');
    }
}

// Example usage
const sll = new SinglyLinkedList();
sll.insert(10);
sll.insert(20);
sll.insert(30);
sll.display();
sll.delete(20);
sll.display();
