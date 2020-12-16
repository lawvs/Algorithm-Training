class MyStack {
  list: number[] = []

  push(x: number): void {
    const l = this.list.length
    this.list.push(x)
    for (let i = 0; i < l; i++) {
      this.list.push(this.list.shift())
    }
  }

  pop(): number {
    return this.list.shift()
  }

  top(): number {
    return this.list[0]
  }

  empty(): boolean {
    return !this.list.length
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
