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

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (!lists.length) {
    return null
  }
  const queue = new PriorityQueue((a, b) => a.val - b.val)
  queue.push(...lists.filter((i) => i))
  const head = new ListNode()
  let cur = head
  while (queue.size()) {
    cur.next = queue.pop()
    cur = cur.next
    if (cur.next) queue.push(cur.next)
  }
  return head.next
}
