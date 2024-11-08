class StackUsingQueues {
    constructor() {
        this.q1 = [];
        this.q2 = [];
    }

    push(value) {
        this.q1.push(value);
    }

    pop() {
        // Move all elements except the last one from q1 to q2
        while (this.q1.length > 1) {
            this.q2.push(this.q1.shift());
        }

        // Get the last element (top of the stack)
        const topElement = this.q1.shift();

        // Swap the queues
        [this.q1, this.q2] = [this.q2, this.q1];

        return topElement;
    }

    top() {
        // Similar to pop but re-adds the top element back to the queue
        while (this.q1.length > 1) {
            this.q2.push(this.q1.shift());
        }

        const topElement = this.q1.shift();
        this.q2.push(topElement);

        [this.q1, this.q2] = [this.q2, this.q1];

        return topElement;
    }

    isEmpty() {
        return this.q1.length === 0;
    }
}

// Example Usage
const stack = new StackUsingQueues();
stack.push(10);
stack.push(20);
console.log("Top element:", stack.top());  // Output: 20
console.log("Popped element:", stack.pop());  // Output: 20
console.log("Is stack empty?", stack.isEmpty());  // Output: false
