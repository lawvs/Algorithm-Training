class PriorityQueue {
  constructor(comparator = (a, b) => a - b) {
    this._heap = []
    this._comparator = comparator
  }

  size() {
    return this._heap.length
  }

  isEmpty() {
    return this.size() === 0
  }

  peek() {
    return this._heap[0]
  }

  push(...values) {
    values.forEach((value) => {
      this._heap.push(value)
      this._siftUp()
    })

    return this.size()
  }

  pop() {
    const poppedValue = this.peek()
    const bottom = this.size() - 1

    if (bottom > 0) {
      this._swap(0, bottom)
    }

    this._heap.pop()
    this._siftDown()

    return poppedValue
  }

  replace(value) {
    const replacedValue = this.peek()

    this._heap[0] = value

    this._siftDown()

    return replacedValue
  }

  parent(i) {
    return ((i + 1) >>> 1) - 1
  }

  left(i) {
    return (i << 1) + 1
  }

  right(i) {
    return (i + 1) << 1
  }

  _greater(i, j) {
    return this._comparator(this._heap[i], this._heap[j]) < 0
  }

  _swap(i, j) {
    ;[this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]]
  }

  _siftUp() {
    let node = this.size() - 1

    while (node > 0 && this._greater(node, this.parent(node))) {
      this._swap(node, this.parent(node))
      node = this.parent(node)
    }
  }

  _siftDown() {
    let node = 0

    while (
      (this.left(node) < this.size() && this._greater(this.left(node), node)) ||
      (this.right(node) < this.size() && this._greater(this.right(node), node))
    ) {
      let maxChild =
        this.right(node) < this.size() &&
        this._greater(this.right(node), this.left(node))
          ? this.right(node)
          : this.left(node)

      this._swap(node, maxChild)

      node = maxChild
    }
  }
}

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  const queue = new PriorityQueue((a, b) => a[0] - b[0])
  queue.push(...matrix)

  while (k-- > 1) {
    const top = queue.pop()
    top.shift()
    if (top.length) {
      queue.push(top)
    }
  }
  return queue.peek()[0]
}

let ans

ans = kthSmallest([[1]], 1)
console.assert(ans === 1)

ans = kthSmallest(
  [
    [1, 5, 9],
    [10, 11, 13],
    [12, 13, 15],
  ],
  8
)
console.assert(ans === 13)

ans = kthSmallest(
  [
    [1, 2],
    [1, 3],
  ],
  3
)
console.assert(ans === 2)
