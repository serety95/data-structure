class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
    }

    insert(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
            newNode.prev = current;
        }
    }

    delete(key) {
        let current = this.head;
        while (current && current.data !== key) {
            current = current.next;
        }
        if (current) {
            if (current.prev) {
                current.prev.next = current.next;
            }
            if (current.next) {
                current.next.prev = current.prev;
            }
            if (current === this.head) {
                this.head = current.next;
            }
        }
    }

    display() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.data + ' <-> ';
            current = current.next;
        }
        console.log(result + 'None');
    }
}

// Example usage
const dll = new DoublyLinkedList();
dll.insert(10);
dll.insert(20);
dll.insert(30);
dll.display();
dll.delete(20);
dll.display();




