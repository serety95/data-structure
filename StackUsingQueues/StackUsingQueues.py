from queue import Queue

class StackUsingQueues:
    def __init__(self):
        self.q1 = Queue()
        self.q2 = Queue()

    def push(self, value):
        print(f"Pushed {value}")
        self.q1.put(value)

    def pop(self):
        while self.q1.qsize() > 1:
            self.q2.put(self.q1.get())
        top_element = self.q1.get()
        print(f"Popped element: {top_element}")
        self.q1, self.q2 = self.q2, self.q1
        return top_element

    def top(self):
        while self.q1.qsize() > 1:
            self.q2.put(self.q1.get())
        top_element = self.q1.get()
        self.q2.put(top_element)
        self.q1, self.q2 = self.q2, self.q1
        print(f"Top element: {top_element}")
        return top_element

    def is_empty(self):
        empty = self.q1.empty()
        print(f"Is stack empty? {empty}")
        return empty

def run_stack_example(stack):
    stack.push(10)
    stack.push(20)
    stack.top()         # Should print: Top element: 20
    stack.pop()         # Should print: Popped element: 20
    stack.is_empty()    # Should print: Is stack empty? False
    stack.pop()         # Should print: Popped element: 10
    stack.is_empty()    # Should print: Is stack empty? True

# Running the example
stack = StackUsingQueues()
run_stack_example(stack)
