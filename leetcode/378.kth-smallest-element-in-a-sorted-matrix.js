/**
 * See https://github.com/funnycoderstar/leetcode/issues/49
 */
class Heap {
  constructor() {
    this.data = []
  }
  /**
   * js中以0作为数组的索引
   * i的父节点为 Math.floor((i-1) / 2)
   * i的左子节点为 nLeftIndex = 2 * (i + 1) - 1;
   * i的右子节点为 nRightIndex = 2 * (i + 1);
   */
  insert(value) {
    this.data.push(value)
    let nIndex = this.data.length - 1
    let nFatherIndex = Math.floor((nIndex - 1) / 2)
    while (nFatherIndex >= 0) {
      if (this.data[nIndex] > this.data[nFatherIndex]) {
        const temp = this.data[nFatherIndex]
        this.data[nFatherIndex] = this.data[nIndex]
        this.data[nIndex] = temp
      }
      nIndex = nFatherIndex
      nFatherIndex = Math.floor((nIndex - 1) / 2)
    }
  }
  // 删除最大的节点
  delete() {
    let nIndex = 0
    let nLeaf = this.data.pop()
    // 将最后一个子节点补充到根节点
    this.data[nIndex] = nLeaf
    let len = this.data.length - 1
    while (nIndex <= len) {
      let nLeftIndex = 2 * (nIndex + 1) - 1
      let nRightIndex = 2 * (nIndex + 1)
      let nSelectIndex = nLeftIndex
      // 找到最大的子节点
      if (nRightIndex <= len) {
        nSelectIndex =
          this.data[nLeftIndex] > this.data[nRightIndex]
            ? nLeftIndex
            : nRightIndex
      }
      if (nSelectIndex <= len && this.data[nIndex] < this.data[nSelectIndex]) {
        var temp = this.data[nIndex]
        this.data[nIndex] = this.data[nSelectIndex]
        this.data[nSelectIndex] = temp
      }
      nIndex = nSelectIndex
    }
  }
  print() {
    console.log(this.data)
  }
  build(arr) {
    this.data = []
    for (let i = 0; i < arr.length; i++) {
      this.insert(arr[i])
    }
  }
}

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  const heap = new Heap()
  heap.build(Array(k).fill(Infinity))
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const v = matrix[i][j]
      if (v < heap.data[0]) {
        heap.insert(v)
        heap.delete()
      }
    }
  }
  // console.log(arr)

  return heap.data[0]
}

let ans
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
