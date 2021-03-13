const MAGIC = 9973

class MyHashMap {
  arr = Array(MAGIC) as [number, number][][]
  constructor() {}

  put(key: number, value: number): void {
    const pair = [key, value] as [number, number]
    const innerKey = key % MAGIC
    if (!this.arr[innerKey]) {
      this.arr[innerKey] = [pair]
      return
    }
    const maybeExist = this.arr[innerKey].find(([k, v]) => k === key)
    if (maybeExist) {
      maybeExist[1] = value
    } else {
      this.arr[innerKey].push(pair)
    }
  }

  get(key: number): number {
    const innerKey = key % MAGIC
    if (!this.arr[innerKey]) {
      return -1
    }
    const maybeExist = this.arr[innerKey].find(([k, v]) => k === key)
    if (!maybeExist) {
      return -1
    }
    return maybeExist[1]
  }

  remove(key: number): void {
    const innerKey = key % MAGIC
    if (!this.arr[innerKey]) {
      // throw new Error('No existed')
      return
    }
    const maybeExistIdx = this.arr[innerKey].findIndex(([k, v]) => k === key)
    if (maybeExistIdx === -1) {
      // throw new Error('No existed')
      return
    }
    this.arr[innerKey].splice(maybeExistIdx, 1)
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
