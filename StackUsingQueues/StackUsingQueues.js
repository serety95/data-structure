class StackUsingQueues {
    constructor() {
        this.q1 = [];
        this.q2 = [];
    }

    push(value) {
        console.log(`Pushed ${value}`);
        this.q1.push(value);
    }

    pop() {
        while (this.q1.length > 1) {
            this.q2.push(this.q1.shift());
        }
        const topElement = this.q1.shift();
        console.log(`Popped element: ${topElement}`);
        [this.q1, this.q2] = [this.q2, this.q1];
        return topElement;
    }

    top() {
        while (this.q1.length > 1) {
            this.q2.push(this.q1.shift());
        }
        const topElement = this.q1.shift();
        this.q2.push(topElement);
        [this.q1, this.q2] = [this.q2, this.q1];
        console.log(`Top element: ${topElement}`);
        return topElement;
    }

    isEmpty() {
        const empty = this.q1.length === 0;
        console.log(`Is stack empty? ${empty}`);
        return empty;
    }
}

function runStackExample(stack) {
    stack.push(10);
    stack.top();         // Should print: Top element: 10
    stack.push(20);
    stack.top();         // Should print: Top element: 20
    stack.pop();         // Should print: Popped element: 20
    stack.isEmpty();     // Should print: Is stack empty? false
    stack.pop();         // Should print: Popped element: 10
    stack.isEmpty();     // Should print: Is stack empty? true
}

// Running the example
const stack = new StackUsingQueues();
runStackExample(stack);
