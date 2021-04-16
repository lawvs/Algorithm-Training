class MKAverage {
  stream: number[] = []
  m: number
  k: number

  constructor(m: number, k: number) {
    this.m = m
    this.k = k
  }

  addElement(num: number): void {
    if (this.stream.length >= this.m) {
      this.stream.shift()
    }
    this.stream.push(num)
  }

  calculateMKAverage(): number {
    if (this.stream.length < this.m) {
      return -1
    }
    return Math.floor(
      this.stream
        .slice()
        .sort((a, b) => a - b)
        .slice(this.k, this.m - this.k)
        .reduce((a, b) => a + b, 0) /
        (this.m - 2 * this.k)
    )
  }
}

/**
 * Your MKAverage object will be instantiated and called as such:
 * var obj = new MKAverage(m, k)
 * obj.addElement(num)
 * var param_2 = obj.calculateMKAverage()
 */
