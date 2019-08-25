import heapq


class DinnerPlates:

    def __init__(self, capacity: int):
        self.capacity = capacity
        self.stack = [[]]
        self.heap = []

    def push(self, val: int) -> None:
        if not len(self.heap):
            if len(self.stack[-1]) == self.capacity:
                self.stack.append([val])
            else:
                self.stack[-1].append(val)
            return
        minStackIndex = heapq.heappop(self.heap)
        self.stack[minStackIndex].append(val)
        if len(self.stack[minStackIndex]) < self.capacity:
            heapq.heappush(self.heap, minStackIndex)

    def pop(self) -> int:
        while len(self.stack) and not len(self.stack[-1]):
            self.stack.pop()
        if not len(self.stack):
            return -1
        return self.stack[-1].pop()

    def popAtStack(self, index: int) -> int:
        if len(self.stack) < index:
            return -1
        if not len(self.stack[index]):
            return -1
        top = self.stack[index].pop()
        if index not in self.heap:
            heapq.heappush(self.heap, index)
        return top


# Your DinnerPlates object will be instantiated and called as such:
# obj = DinnerPlates(capacity)
# obj.push(val)
# param_2 = obj.pop()
# param_3 = obj.popAtStack(index)
