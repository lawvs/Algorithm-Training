const error = () => {
  throw new Error("You can't use this function")
}

Array.prototype.shift = error
Array.prototype.unshift = error

const clearQueue = (from: number[], to: number[]) => {
  while (from.length) {
    to.push(from.pop())
  }
}

class MyQueue {
  stack = []
  reverseStack = []
  constructor() {}

  push(x: number): void {
    clearQueue(this.reverseStack, this.stack)
    this.stack.push(x)
  }

  pop(): number {
    clearQueue(this.stack, this.reverseStack)
    return this.reverseStack.pop()
  }

  peek(): number {
    clearQueue(this.stack, this.reverseStack)
    // top
    return this.reverseStack[this.reverseStack.length - 1]
  }

  empty(): boolean {
    return this.stack.length === 0 && this.reverseStack.length === 0
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
