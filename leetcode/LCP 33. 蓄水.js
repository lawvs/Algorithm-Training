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

const calcCnt = (bucket, vat) => {
  if (!bucket && !vat) {
    return 0
  }
  if (!bucket) {
    return Infinity
  }
  return Math.ceil(vat / bucket)
}

/**
 * @param {number[]} bucket
 * @param {number[]} vat
 * @return {number}
 */
var storeWater = function (bucket, vat) {
  const pq = new PriorityQueue(
    (a, b) => calcCnt(b[0], b[1]) - calcCnt(a[0], a[1])
  )
  for (let i = 0; i < bucket.length; i++) {
    pq.push([bucket[i], vat[i]])
  }
  let min = calcCnt(...pq.peek())
  let enhanceCnt = 0
  while (enhanceCnt < min) {
    enhanceCnt++
    const [topBucket, topVat] = pq.pop()
    pq.push([topBucket + 1, topVat])
    min = Math.min(min, calcCnt(...pq.peek()) + enhanceCnt)
  }
  return min
}
