from queue import Queue

class StackUsingQueues:
    def __init__(self):
        self.q1 = Queue()
        self.q2 = Queue()

    def push(self, value):
        self.q1.put(value)

    def pop(self):
        # Move all elements except the last one from q1 to q2
        while self.q1.qsize() > 1:
            self.q2.put(self.q1.get())

        # Get the last element (top of the stack)
        top_element = self.q1.get()

        # Swap the names of q1 and q2
        self.q1, self.q2 = self.q2, self.q1

        return top_element

    def top(self):
        # Similar to pop but re-adds the top element back to the queue
        while self.q1.qsize() > 1:
            self.q2.put(self.q1.get())

        top_element = self.q1.get()
        self.q2.put(top_element)

        self.q1, self.q2 = self.q2, self.q1

        return top_element

    def is_empty(self):
        return self.q1.empty()

# Example Usage
stack = StackUsingQueues()
stack.push(10)
stack.push(20)
print("Top element:", stack.top())  # Output: 20
print("Popped element:", stack.pop())  # Output: 20
print("Is stack empty?", stack.is_empty())  # Output: False
