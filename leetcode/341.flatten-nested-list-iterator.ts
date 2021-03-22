/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * class NestedInteger {
 *     If value is provided, then it holds a single integer
 *     Otherwise it holds an empty nested list
 *     constructor(value?: number) {
 *         ...
 *     };
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     isInteger(): boolean {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     getInteger(): number | null {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     setInteger(value: number) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     add(elem: NestedInteger) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds,
 *     or an empty list if this NestedInteger holds a single integer
 *     getList(): NestedInteger[] {
 *         ...
 *     };
 * };
 */

class NestedIterator {
  nestedList: NestedInteger[]
  current = 0
  currentList: NestedIterator

  constructor(nestedList: NestedInteger[]) {
    this.nestedList = nestedList
  }

  hasNext(): boolean {
    if (this.currentList && this.currentList.hasNext()) {
      return true
    }
    const curEle = this.nestedList[this.current]
    if (curEle === undefined) {
      return false
    }
    if (curEle.isInteger()) {
      return true
    }
    this.currentList = new NestedIterator(curEle.getList())
    this.current++
    return this.currentList.hasNext() || this.hasNext()
  }

  next(): number {
    if (this.currentList && this.currentList.hasNext()) {
      return this.currentList.next()
    }
    this.currentList = null

    const curEle = this.nestedList[this.current]
    this.current++
    if (curEle === undefined) {
      throw new Error()
    }
    if (curEle.isInteger()) {
      return curEle.getInteger()
    }

    this.currentList = new NestedIterator(curEle.getList())
    return this.currentList.next()
  }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new NestedIterator(nestedList)
 * var a: number[] = []
 * while (obj.hasNext()) a.push(obj.next());
 */
