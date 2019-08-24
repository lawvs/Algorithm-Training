var FileSystem = function() {
  this.root = {}
}

/**
 * @param {string} path
 * @param {number} value
 * @return {boolean}
 */
FileSystem.prototype.create = function(path, value) {
  const pathArr = path.split('/').filter(i => i)
  let cur = this.root
  for (let i = 0; i < pathArr.length; i++) {
    const name = pathArr[i]
    if (!cur[name]) {
      if (i === pathArr.length - 1) {
        cur[name] = { value }
        return true
      }
      return false
    }
    cur = cur[name]
  }
  cur.value = value
  return true
}

/**
 * @param {string} path
 * @return {number}
 */
FileSystem.prototype.get = function(path) {
  console.log(this.root)
  const pathArr = path.split('/').filter(i => i)
  let cur = this.root
  for (let i = 0; i < pathArr.length; i++) {
    const name = pathArr[i]
    if (!cur[name]) {
      return -1
    }
    cur = cur[name]
  }
  return cur.value || -1
}

/**
 * Your FileSystem object will be instantiated and called as such:
 * var obj = new FileSystem()
 * var param_1 = obj.create(path,value)
 * var param_2 = obj.get(path)
 */
