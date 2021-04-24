/**
 * See https://stackoverflow.com/a/42919752
 *
 * @example
 * // Initializes a new tiny heap
 * const queue = new PriorityQueue()
 * // Pushes a value onto the heap
 * queue.push(value)
 * // Pops the top value of the heap
 * queue.pop()
 * // Gets the top value of the heap without popping it
 * queue.peek()
 * // Gets the number of nodes in the heap
 * queue.size()
 * queue.isEmpty()
 */
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

  _parent(i) {
    return ((i + 1) >>> 1) - 1
  }

  _left(i) {
    return (i << 1) + 1
  }

  _right(i) {
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

    while (node > 0 && this._greater(node, this._parent(node))) {
      this._swap(node, this._parent(node))
      node = this._parent(node)
    }
  }

  _siftDown() {
    let node = 0

    while (
      (this._left(node) < this.size() &&
        this._greater(this._left(node), node)) ||
      (this._right(node) < this.size() &&
        this._greater(this._right(node), node))
    ) {
      let maxChild =
        this._right(node) < this.size() &&
        this._greater(this._right(node), this._left(node))
          ? this._right(node)
          : this._left(node)

      this._swap(node, maxChild)

      node = maxChild
    }
  }
}

// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/kth-largest-element-in-a-stream/solution/shu-ju-liu-zhong-de-di-k-da-yuan-su-by-l-woz8/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
class MinHeap {
  constructor(data = []) {
    this.data = data
    this.comparator = (a, b) => a - b
    this.heapify()
  }

  heapify() {
    if (this.size() < 2) return
    for (let i = 1; i < this.size(); i++) {
      this.bubbleUp(i)
    }
  }

  peek() {
    if (this.size() === 0) return null
    return this.data[0]
  }

  push(value) {
    this.data.push(value)
    this.bubbleUp(this.size() - 1)
  }

  pop() {
    if (this.size() === 0) {
      return null
    }
    const result = this.data[0]
    const last = this.data.pop()
    if (this.size() !== 0) {
      this.data[0] = last
      this.bubbleDown(0)
    }
    return result
  }

  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = (index - 1) >> 1
      if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
        this.swap(index, parentIndex)
        index = parentIndex
      } else {
        break
      }
    }
  }

  bubbleDown(index) {
    const lastIndex = this.size() - 1
    while (true) {
      const leftIndex = index * 2 + 1
      const rightIndex = index * 2 + 2
      let findIndex = index
      if (
        leftIndex <= lastIndex &&
        this.comparator(this.data[leftIndex], this.data[findIndex]) < 0
      ) {
        findIndex = leftIndex
      }
      if (
        rightIndex <= lastIndex &&
        this.comparator(this.data[rightIndex], this.data[findIndex]) < 0
      ) {
        findIndex = rightIndex
      }
      if (index !== findIndex) {
        this.swap(index, findIndex)
        index = findIndex
      } else {
        break
      }
    }
  }

  swap(index1, index2) {
    ;[this.data[index1], this.data[index2]] = [
      this.data[index2],
      this.data[index1],
    ]
  }

  size() {
    return this.data.length
  }
}
