class MyStack {
  list1: number[] = []
  list2: number[] = []

  push(x: number): void {
    this.list2.push(x)
    while (this.list1.length) {
      this.list2.push(this.list1.shift())
    }
    this.list1 = this.list2
    this.list2 = []
  }

  pop(): number {
    return this.list1.shift()
  }

  top(): number {
    return this.list1[0]
  }

  empty(): boolean {
    return !this.list1.length
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
